import React from "react";

export default function Input(props) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (props.invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-400";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{props.label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
