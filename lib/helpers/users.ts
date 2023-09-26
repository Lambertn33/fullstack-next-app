import fs from "fs";

const usersFolderPath = "./data";
const dataFilePath = `${usersFolderPath}/users.json`;

export const getUsers = () => fs.readFileSync(dataFilePath, "utf8");

