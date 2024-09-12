import React, { forwardRef } from "react";

const Input = forwardRef((props,ref) =>  {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <input type={props.type} ref={ref} className="grow " placeholder={props.placeholder} {...props} />
      </label>
    </>
  );
})

export default Input;
