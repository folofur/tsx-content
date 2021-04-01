import React, { useState } from "react";

const EventComponent: React.FC = () => {
  // Type inference system is not applied in a pre-defined (non-inline) functions!
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.movementX);
  };
  return (
    <div>
      <h3>EVENT COMPONENT!</h3>
      <input type="text" onChange={onChange} />
      <div draggable onDrag={onDragStart}>
        DRAG ME
      </div>
    </div>
  );
};

export default EventComponent;
