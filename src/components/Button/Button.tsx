import React from "react";

export const Button = (props: { label: string }) => {
  return (
    <div className="bg-blue-500 rounded-md py-1 px-2" data-testid="button">
      {props.label}
    </div>
  );
};
