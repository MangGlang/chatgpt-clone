import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";


type Option = {
  value: string;
  label: string;
};

// ModalOptions = dropdown options to return information
type Data = {
    modelOptions: Option[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // Making call to openai: List all models & pass data
    // inside ".data" is what we're looking for
    // Mapping and extracting data of "id"
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }))

  res.status(200).json({
    modelOptions,
  })

}
