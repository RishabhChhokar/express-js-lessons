import {readMessages, writeMessage} from "../models/Chat.js"
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

  writeMessage(chatData);
  res.redirect("/");
};

export const getMessages = (req, res) => {
  const messages = readMessages();
  res.json(messages);
};
