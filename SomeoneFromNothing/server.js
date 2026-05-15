// AI assisted

import express from "express";
import OpenAI from "openai";
import fs from "fs";

const app = express();
const openai = new OpenAI();

app.use(express.json());
app.use(express.static("."));

async function generateImage(filename, prompt) {
  const result = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size: "1024x1024"
  });

  const imageBase64 = result.data[0].b64_json;
  const imageBytes = Buffer.from(imageBase64, "base64");

  fs.writeFileSync(filename, imageBytes);
}

app.post("/generate-images", async (req, res) => {
  const { name, city, hobby, song, secret, fear, photoStyle } = req.body;

  const prompts = [
    {
      filename: "assets/generated/profile1.png",
      prompt: `Low quality social media profile picture, young person from ${city} named ${name}, interested in ${hobby}, emotionally ambiguous, inspired by ${song}, slightly blurry phone camera image, ${photoStyle} aesthetic, realistic social media archive image, no text`
    },
    {
      filename: "assets/generated/post1.png",
      prompt: `Late night social media photo in ${city}, inspired by feelings of ${fear}, realistic phone camera aesthetic, emotionally nostalgic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence. Cheap phone camera, compressed Instagram upload, slight motion blur, washed out flash, awkward framing, ordinary social media memory, not professional photography`
    },
    {
      filename: "assets/generated/post2.png",
      prompt: `Casual social media image related to ${hobby}, blurry digital memory, realistic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence. Cheap phone camera, compressed Instagram upload, slight motion blur, washed out flash, awkward framing, ordinary social media memory, not professional photography`
    },
    {
      filename: "assets/generated/post3.png",
      prompt: `A blurry social media photo inspired by ${song}, realistic phone camera image, emotionally nostalgic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence. Cheap phone camera, compressed Instagram upload, slight motion blur, washed out flash, awkward framing, ordinary social media memory, not professional photography`
    },
    {
      filename: "assets/generated/post4.png",
      prompt: `A ${photoStyle} social media photo in ${city}, realistic phone camera aesthetic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence. Cheap phone camera, compressed Instagram upload, slight motion blur, washed out flash, awkward framing, ordinary social media memory, not professional photography`
    },
    {
      filename: "assets/generated/post5.png",
      prompt: `A quiet social media image hinting at ${secret}, emotionally ambiguous, realistic, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence. Cheap phone camera, compressed Instagram upload, slight motion blur, washed out flash, awkward framing, ordinary social media memory, not professional photography`
    },
    {
      filename: "assets/generated/post6.png",
      prompt: `A social media memory connected to fear of ${fear}, subtle, realistic phone camera image, no text. If including person or mutiple people, at least one person is named ${name} otherwise ignore this sentence. Cheap phone camera, compressed Instagram upload, slight motion blur, washed out flash, awkward framing, ordinary social media memory, not professional photography`
    }
  ];

  for (const item of prompts) {
    await generateImage(item.filename, item.prompt);
  }

  res.json({
    success: true,
    images: prompts.map(item => item.filename)
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});