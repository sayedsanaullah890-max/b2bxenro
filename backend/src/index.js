import express from "express";

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "b2b-backend",
    database_url_present: Boolean(process.env.DATABASE_URL),
  });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
