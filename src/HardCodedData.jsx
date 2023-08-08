export const defaultTasks = {
  Folders: {
    saveChanges: {
      enabled: "Save Changes",
      disabled: "There are no changes to save",
    },
    editLogs: {
      enabled: "edit Logs",
      disabled: "there are no ogs to how",
    },
    openCategory: {
      enabled: "Open Category",
      disabled: "There are no Category to open",
    },
    "Add Tooltip": {
      enabled: "Add Tooltip",
      disabled: "There are no Tooltip to open",
    },
    // Info: {
    //   enabled: "Info",
    //   disabled: "There are no Info to show",
    // },
  },
  "Task Statuses": {
    saveChanges: {
      enabled: "Save Changes",
      disabled: "There are no changes to save",
    },
    editLogs: {
      enabled: "Edit Logs",
      disabled: "There are no Logs to Show",
    },
    openCategory: {
      enabled: "Open Category",
      disabled: "There are no Category to open",
    },
  },
};

export const generateKey = (value) => {
  return value
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
};
