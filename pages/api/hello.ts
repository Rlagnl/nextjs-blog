import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{ text: string }>,
) {
  res.status(200).json({ text: "Hello" });
}
