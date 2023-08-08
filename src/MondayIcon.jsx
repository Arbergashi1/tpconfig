import { Button } from "antd/es/radio";
import React from "react";
import TooltipMonday from "./TooltipMonday";
import { defaultTasks } from "./HardCodedData";

const MondayIcon = ({
  onClick,
  children,
  Icon,
  hasTooltip = true,
  disabled = false,
}) => {
  console.log({ onClick, children, Icon });
  const getCurrentRoute = defaultTasks.Folders;
  const titleKeys = Object.keys(defaultTasks.Folders);

  const positionOfKey = titleKeys.find((key) =>
    getCurrentRoute[key].enabled.includes(children)
  );

  const taskInfo = getCurrentRoute[positionOfKey];

  const iconContent = (
    <Button disabled={disabled} onClick={onClick}>
      {Icon}
    </Button>
  );
  if (!children) {
    return null; // or return a default fallback
  }
  return (
    <>
      {hasTooltip ? (
        <TooltipMonday text={disabled ? taskInfo?.disabled : taskInfo?.enabled}>
          <div>{iconContent}</div>
        </TooltipMonday>
      ) : (
        <div>{iconContent}</div>
      )}
    </>
  );
};

export default MondayIcon;
