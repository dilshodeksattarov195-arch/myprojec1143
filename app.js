const searchFenderConfig = { serverId: 6150, active: true };

const searchFenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6150() {
    return searchFenderConfig.active ? "OK" : "ERR";
}

console.log("Module searchFender loaded successfully.");