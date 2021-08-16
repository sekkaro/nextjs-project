const { events } = require("./data.json");

export default (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} is not allowed` });
  }
  const evt = events.filter((ev) => ev.slug === req.query.slug);
  res.status(200).json(evt);
};
