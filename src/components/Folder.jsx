import React, { useState } from "react";

const Folder = ({ explorerData }) => {
  const { name, items = [], isFolder } = explorerData || {};
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <div
        style={{ padding: "4px", marginTop: 5 }}
        onClick={() => isFolder && setExpand(!expand)}
      >
        <span>{name}</span>
      </div>
      <div
        style={{
          display: expand ? "block" : "none",
          paddingLeft: 10,
        }}
      >
        {items.map((exp) => {
          return <Folder explorerData={exp} />;
        })}
      </div>
    </div>
  );
};

export default Folder;
