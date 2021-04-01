import { Component } from 'react';

interface UserSearchProps {
  users: { 
    name: string;
    age: number
  }[]
}

interface UserSearchState {
  name: string;
  user: {name: string; age: number} | undefined;
}

class UserSearch extends Component<UserSearchProps> {

  state: UserSearchState = {
    name: '',
    user: undefined
  };

  const onSearch = () => {
    const foundUser = this.props.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser});
  }

  render() {
    return (
      <div>
      Search
      <input
        value={this.state.name}
        onChange={(e) => this.setState({name: e.target.value})}
        placeholder="Type a name!"
      />
      <button onClick={onSearch}>Find User</button>
      <div>
        {this.state.user && this.state.user.name}
        
      </div>
    </div>
    )
  }
}
 export const UserSearch;
