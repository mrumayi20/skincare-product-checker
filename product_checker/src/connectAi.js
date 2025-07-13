import { InferenceClient } from "@huggingface/inference";

// Vite will inject this in browser build
const client = new InferenceClient(import.meta.env.VITE_HF_KEY);

export async function fetchResponse(productName) {
  try {
    const response = await client.chatCompletion({
      model: "HuggingFaceH4/zephyr-7b-beta",
      messages: [
        {
          role: "system",
          content:`You are a skincare expert.
                    Given a skincare product name, give me a list of harmful checmicals.
                    Based on that, determine whether the product is generally safe to use or not.
                    Provide what is the side effect of those chemicals in your response, individually. 
                    Your response should only highlight important points`,
        },
        {
          role: "user",
          content: `${productName}?`,
        },
      ],
      temperature: 0
    //   max_tokens: 512,
    });

    return response.choices[0].message.content;
  } catch (err) {
    return `Error: ${err.message}`;
  }
}
