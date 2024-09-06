import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getContactUs = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "contactus.html"));
};


export const submitContact = (req, res) => {
  const { name, email } = req.body;
  const contactData = { name, email };

  fs.appendFileSync("contacts.json", JSON.stringify(contactData) + "\n");
  res.redirect("/success");
};

export const getSuccessPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "success.html"));
};
