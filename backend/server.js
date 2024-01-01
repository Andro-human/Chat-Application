const express = require("express");
const cors = require("cors");
const axios = require("axios");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(morgan("dev"));
//enable origin for all routes
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "Private-key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(8080, () => {
  console.log(`Node Server Running in Port http://localhost:8080`);
});
