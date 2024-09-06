import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "login.html"));
};

export const login = (req, res) => {
  const { username } = req.body;
  res.cookie("username", username);
  res.redirect("/");
};
