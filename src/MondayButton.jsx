import { Button } from "antd";
import React from "react";
import TooltipMonday from "./TooltipMonday";
import { defaultTasks } from "./HardCodedData";

const MondayButton = ({ children, disabled, hasTooltip = true, onClick }) => {
  const getCurrentRoute = defaultTasks.Folders;
  const titleKeys = Object.keys(defaultTasks.Folders);

  // Convert children and task enabled values to lowercase for case-insensitive comparison
  const positionOfKey = titleKeys.find((key) =>
    getCurrentRoute[key].enabled.toLowerCase().includes(children.toLowerCase())
  );

  const taskInfo = getCurrentRoute[positionOfKey];
  const buttonContent = (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );

  // Check if children prop is empty or not provided
  if (!children) {
    return null; // or return a default fallback
  }

  return (
    <>
      {hasTooltip ? (
        <TooltipMonday text={disabled ? taskInfo?.disabled : taskInfo?.enabled}>
          <div>{buttonContent}</div>
        </TooltipMonday>
      ) : (
        <div>{buttonContent}</div>
      )}
    </>
  );
};

export default MondayButton;
