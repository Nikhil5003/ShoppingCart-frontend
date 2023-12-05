import React, { useState } from "react";
// import { Rating } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
const StarRating = () => {
  const [value, setValue] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <div>
        {[...new Array(5)].map((_, index) => (
          <StarBorderOutlinedIcon
            style={{
              marginInline: 10,
              fill: index + 1 <= value && "yellow",
            }}
            onClick={() => {
              setValue(index + 1);
              alert("thanks for the rating");
            }}
          />
        ))}
      </div>

      <h1>rating : {value}</h1>
    </div>
  );
};

export default StarRating;
