import React from "react";

const Input = (props) =>
{
    return(
        <input type="text" className="mt-2" placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    );
};

export default Input;