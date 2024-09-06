import path from "path";
import { readFromFile, writeToFile } from "../utils/fileUtils.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsFilePath = path.join(__dirname, "../data/contacts.json");

export const readContacts = () => readFromFile(contactsFilePath);

export const writeContact = (contact) => writeToFile(contactsFilePath, contact);
