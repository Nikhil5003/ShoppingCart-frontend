import React, { useState } from "react";
import explorer from "./data";
import Folder from "./Folder";
const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  return <Folder explorerData={explorerData} />;
};

export default FileExplorer;
