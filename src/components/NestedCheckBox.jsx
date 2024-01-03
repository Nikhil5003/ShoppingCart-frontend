import React from "react";
const CheckBox = ({ label, children = [] }) => {
  return (
    <div
      style={{
        marginLeft: "20px",
      }}
    >
      <input type="checkbox" name="" id="" />
      <span>
        <b>{label}</b>
      </span>
      {!!children.length &&
        children.map((ele) => (
          <CheckBox children={ele?.children} label={ele.label} />
        ))}
    </div>
  );
};
const NestedCheckBox = ({ config }) => {
  const { useState } = React;
  const [checked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div style={{ height: 500, width: 500 }}>
      {config.map(({ label, children = [] }, index) => (
        <div key={index}>
          <CheckBox label={label} children={children} />
        </div>
      ))}
    </div>
  );
};

export default NestedCheckBox;
