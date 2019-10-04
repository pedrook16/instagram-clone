import React from "react";
import { Link } from "react-router-dom";

import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";

import { Div } from "./styles";

export default function Icon() {
  return (
    <Div>
      <Link to="/publication">
        <AddPhotoAlternateRoundedIcon className="icon" />
      </Link>
      <span>Post a Photo...</span>
    </Div>
  );
}
