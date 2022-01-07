const express = require("express");
const app = express();
app.use(express.json());
const { addMsg } = require("./user.js");

app.get("/user1", async (req, res) => {
  const list = await addMsg();
  console.log(list);
  res.json(list);
});

app.post("/addmsg", async (req, res) => {
  await addMsg(req.body);
  res.json("Added");
});

app.listen(5000, () => {
  console.log("Connected");
});
