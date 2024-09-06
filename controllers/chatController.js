import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const getChatRoom = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
};

export const sendMessage = (req, res) => {
  const { username, message } = req.body;
  const chatData = { username, message };

  fs.appendFileSync("messages.json", JSON.stringify(chatData) + "\n");
  res.redirect("/");
};

export const getMessages = (req, res) => {
  const messages = fs
    .readFileSync("messages.json", "utf-8")
    .trim()
    .split("\n")
    .map((line) => JSON.parse(line));
  res.json(messages);
};
