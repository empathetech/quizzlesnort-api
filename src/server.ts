import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Start the Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
