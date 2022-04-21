import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  code: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ code: "aaaa" });
  }
  if (req.method === "POST") {
    return res.status(200).json({ code: req.body.code });
  }
}
