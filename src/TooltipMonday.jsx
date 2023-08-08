import { Tooltip } from "antd";
import React from "react";

const TooltipMonday = ({ children, text }) => {
  return <Tooltip title={text}>{children}</Tooltip>;
};

export default TooltipMonday;
