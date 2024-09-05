// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const { URLSearchParams } = require('url')
// const PORT = 3000;
// const messagesFile = path.join(__dirname, 'messages.txt');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         fs.readFile(messagesFile, 'utf8', (err, data) => {
//             if (err && err.code !== 'ENOENT') {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Server Error');
//                 return;
//             }

//             const messages = data ? data.split('\n').filter(Boolean).reverse() : [];
//             const messagesHtml = messages.map(msg => `<p>${msg}</p>`).join('');
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(`
//                 <form method="post" action="/submit">

//                     ${messagesHtml}
//                     <input type="text" name="message" required>
//                     <input type="submit" value="Submit">
//                 </form>
//             `);
//         });
//     } else if (req.method === 'POST' && req.url === '/submit') {
//         let body = '';

//         req.on('data', chunk => {
//             body += chunk.toString();
//         });

//         req.on('end', () => {
//             const postData =  new URLSearchParams(body);
//             const message = postData.get('message')

//             fs.readFile(messagesFile, 'utf8', (err, data) => {
//                 if (err && err.code !== 'ENOENT') {
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Server Error');
//                     return;
//                 }

//                 const messages = data ? data.split('\n').filter(Boolean) : [];
//                 messages.unshift(message);

//                 fs.writeFile(messagesFile, messages.join('\n'), err => {
//                     if (err) {
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('Server Error');
//                         return;
//                     }

//                     res.writeHead(302, { 'Location': '/' });
//                     res.end();
//                 });
//             });
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// import { existsSync } from "fs";
// import {
//     rename,
//     unlink,
//     mkdir,
//     rm,
//     appendFile,
//     writeFile,
//     readFile,
//     readdir,
//     copyFile,
// } from "fs/promises";
// stat('./messages.txt', (err, stat) => {
//     if(err) console.log(err);
//     else{
//         console.log(stat);
//     }
// })

// console.log(existsSync(process.argv[2]));

// readFile("./messages.txt" , "utf8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// const reader = async () => {
//     try {
//         const data = await readFile("./messages.txt", "utf8");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// const adder = async () => {
//     try {
//         await appendFile("./messages.txt", " World");
//     } catch (err) {
//         console.log(err);
//     }
// };

// const writer = async () => {
//     try {
//         await writeFile("./test.txt", "Hello World");
//     } catch (err) {
//         console.log(err);
//     }
// };

// let source = process.argv[2];
// let destination = process.argv[3]

// const fileCopier = async () => {
//     try {
//         await copyFile("./messages.txt", "./copiedFile.txt");
//     } catch (err) {
//         console.log(err);
//     }
//     finally{
//         console.log("I Don't care if the opretion was successfull or not, i did my job.")
//     }
// }
// const readDirectory = async () => {
//     try {
//         const data = await readdir("./");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// rename("./tester/messages.txt","./messages.txt",).catch(err => console.log(err));

// unlink('./tester/raw.txt').catch(err => console.log(err))

// mkdir("./test", {recursive: true},).catch(err => console.log(err));

// rm("./test", { recursive: true }).catch((err) => console.log(err));

// reader();
// adder();
// writer();
// fileCopier();
// readDirectory();

// import express from "express";

// const app = express();
// const port = 3000;

// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Welcome to the Home Page!");
// });

// app.get("/add-product", (req, res) => {
//   res.send(`
//     <form action="/add-product" method="POST">
//       <label for="productName">Product Name:</label>
//       <input type="text" id="productName" name="productName" required><br><br>
//       <label for="productSize">Product Size:</label>
//       <input type="text" id="productSize" name="productSize" required><br><br>
//       <button type="submit">Add Product</button>
//     </form>
//   `);
// });

// app.post("/add-product", (req, res) => {
//   let productName = req.body.productName;
//   let productSize = req.body.productSize;

//   console.log(`Product Name: ${productName}`);
//   console.log(`Product Size: ${productSize}`);

//   res.send("Product added successfully!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contactus.html"));
});

app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "success.html"));
});

app.post("/submit-contact", (req, res) => {
  const { name, email } = req.body;
  const contactData = { name, email };

  fs.appendFileSync("contacts.json", JSON.stringify(contactData) + "\n");

  res.redirect("/success");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  res.cookie("username", username);
  res.redirect("/");
});

app.post("/send-message", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  const chatData = { username, message };

  fs.appendFileSync("messages.json", JSON.stringify(chatData) + "\n");
  res.redirect("/");
});

app.get("/messages", (req, res) => {
  const messages = fs
    .readFileSync("messages.json", "utf-8")
    .trim()
    .split("\n")
    .map((line) => JSON.parse(line));
  res.json(messages);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
