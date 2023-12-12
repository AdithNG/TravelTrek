const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo-1106",
  });

  console.log(completion.choices[0].message.content);
}

main();