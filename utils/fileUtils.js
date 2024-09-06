import fs from "fs";

export const readFromFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8").trim();
    return data ? data.split("\n").map((line) => JSON.parse(line)) : [];
  }
  return [];
};

export const writeToFile = (filePath, data) => {
  fs.appendFileSync(filePath, JSON.stringify(data) + "\n");
};
