import { Button, Divider, Input, Modal } from "antd";
import MondayButton from "./MondayButton";
import "./App.css";
import { useEffect, useState } from "react";
import { defaultTasks, generateKey } from "./HardCodedData";
import MondayIcon from "./MondayIcon";
import {
  InfoCircleOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
const App = () => {
  //states
  const [editClick, setEditClick] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [open, setOpen] = useState(false);
  const [fieldOptions, setFieldOptions] = useState(defaultTasks);
  const [dataObject, setDataObject] = useState({
    key: "",
    enabled: "",
    disabled: "",
  });

  useEffect(() => {
    const generatedKey = generateKey(dataObject.enabled);
    setDataObject((prevData) => ({ ...prevData, key: generatedKey }));
  }, [dataObject.enabled]);

  //add from modala func
  const onAdd = () => {
    const newTooltip = {
      enabled: dataObject.enabled,
      disabled: dataObject.disabled,
    };

    const newFieldOptions = {
      ...fieldOptions,
      Folders: {
        ...fieldOptions.Folders,
        [dataObject.key]: newTooltip,
      },
    };

    console.log({ newFieldOptions });
    setFieldOptions(newFieldOptions);
    setOpen(false);
  };

  // Edit function
  const handleEditClick = (key) => {
    console.log({ key });
    setEditClick(!editClick);
    setEditValue(key);
  };

  // const handleFieldOptionChange = (folderKey, property, value) => {
  //   const updatedFieldOptions = {
  //     ...fieldOptions,
  //     Folders: {
  //       ...fieldOptions.Folders,
  //       [folderKey]: {
  //         ...fieldOptions.Folders[folderKey],
  //         [property]: value,
  //       },
  //     },
  //   };

  //   setFieldOptions(updatedFieldOptions);
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <MondayButton>Open Category</MondayButton>
        <MondayButton>Edit Logs</MondayButton>
        <MondayButton>Save Changes</MondayButton>

        <MondayButton disabled={true}>Open Category</MondayButton>
        <MondayButton disabled={true}>Edit Logs</MondayButton>
        <MondayButton disabled={true}>Save Changes</MondayButton>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          margin: "20px",
        }}
      >
        <MondayButton onClick={() => setOpen(true)}>Add Tooltip</MondayButton>
        <div>
          {open && (
            <Modal
              footer={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <MondayButton>Cancel</MondayButton>
                  <MondayButton onClick={onAdd}>Add</MondayButton>
                </div>
              }
              centered
              open={open}
              onCancel={() => setOpen(false)}
            >
              <div>
                <label>Tooltip Title For Enabled Button</label>
                <Input
                  onChange={(e) =>
                    setDataObject({ ...dataObject, enabled: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Tooltip Title For Enabled Button</label>
                <Input
                  onChange={(e) =>
                    setDataObject({ ...dataObject, disabled: e.target.value })
                  }
                />
              </div>

              <div>
                <label>Tooltip Key will be auto generated</label>
                <Input
                  disabled
                  value={dataObject.key}
                  onChange={(e) =>
                    setDataObject({ ...dataObject, key: e.target.value })
                  }
                />
              </div>
            </Modal>
          )}
        </div>
        <div
          style={{
            display: "grid",
            // flexWrap: "wrap",
            // justifyContent: "space-between",
            // margin: "20px",
          }}
        >
          {Object.entries(fieldOptions.Folders).map(([key, tooltip]) => (
            <>
              <p>{key}</p>
              <div
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Input
                  style={{ width: "50%" }}
                  placeholder="Enabled"
                  value={tooltip.enabled}
                />
                {/* <MondayIcon
                  Icon={<VerticalAlignTopOutlined />}
                  onClick={() => handleEditClick(key)}
                >
                  Edit
                </MondayIcon> */}
                <Input
                  style={{ width: "50%" }}
                  placeholder="Disabled"
                  value={tooltip.disabled}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          margin: "20px",
        }}
      >
        <MondayIcon Icon={<InfoCircleOutlined />}>Info</MondayIcon>
      </div>
    </>
  );
};

export default App;
