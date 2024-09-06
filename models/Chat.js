import path from "path";
import { readFromFile, writeToFile } from "../utils/fileUtils.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messagesFilePath = path.join(__dirname, "../data/messages.json");

export const readMessages = () => readFromFile(messagesFilePath);

export const writeMessage = (message) => writeToFile(messagesFilePath, message)
  