import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI();

const prompts = [
    {
        filename: "assets/generated/profile1.png",
        prompt: "A candid social media profile photo, slightly imperfect, everyday phone camera look, intimate but anonymous, no text"
    },
    {
        filename: "assets/generated/post1.png",
        prompt: "A blurry late night social media photo in a city, phone camera, casual memory, no text"  
    },  
    {
        filename: "assets/generated/post2.png",
        prompt: "A candid photo of a quiet street at night, soft flash, social media archive aesthetic, no text"
    },
    {
        filename: "assets/generated/post3.png",
        prompt: "A blurry nostalgic social media photo inspired by music, realistic phone camera image, emotionally ambiguous, no text"
    },
    {
        filename: "assets/generated/post4.png",
        prompt: "A grainy late night social media image, casual digital memory aesthetic, realistic, no text"
    },
    {
        filename: "assets/generated/post5.png",
        prompt: "A quiet emotionally distant social media photo, realistic phone camera aesthetic, lonely atmosphere, no text"
    },
    {
        filename: "assets/generated/post6.png",
        prompt: "A realistic blurry social media memory, emotionally nostalgic, subtle flash photography, no text"
    } 
];

async function generateImage(filename, prompt) {

    const result = await openai.images.generate({
        model: "gpt-image-1",
        prompt: prompt,
        size: "1024x1024",
    });

    const imageBase64 = result.data[0].b64_json;

    const imageBytes = Buffer.from(imageBase64, "base64");

    fs.writeFileSync(filename, imageBytes);

    console.log(`Saved ${filename}`);
}

async function runGeneration() {

    for (const item of prompts) {

        await generateImage(item.filename, item.prompt);

    }

    console.log("All images generated.");
}

runGeneration();
