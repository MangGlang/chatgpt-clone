// Next.js API

// Endpoint
// 1. Strip out values that are passed through via destructing chat input
// 2. Check to see if prompt details and chatId are available (if session is online)
// 3. Query chatGPT: packages chatGPT message as a response
// 4. Access admin to connect backend of firebase?
// 5. return answer as text

import admin from "firebase-admin";
import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Destructing chat input
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model);

  console.log("Response Object:", JSON.stringify(response));

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    // admin priv required for backend
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
