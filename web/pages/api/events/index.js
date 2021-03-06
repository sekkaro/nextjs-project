// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { events } = require("./data.json");

export default (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} is not allowed` });
  }
  res.status(200).json(events);
};
