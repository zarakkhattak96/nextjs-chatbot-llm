import OpenAI from "openai";
import { apiConfig } from "../config/api.config";

const openai = new OpenAI({
	apiKey: apiConfig.openai.apiKey,
});

const completion = openai.chat.completions.create({
	model: "gpt-4o-mini",
	store: true,
	messages: [{ role: "user", content: "write a haiku about ai" }],
});

completion.then((result) => console.log(result.choices[0].message));

// const openai = new OpenAI({
// 	apiKey: apiConfig.openai.apiKey,
// 	dangerouslyAllowBrowser: true,
// });

export interface ChatMessage {
	role: "user" | "assistant" | "system";
	content: string;
}

export const generateAIResponse = async (messages: ChatMessage[]): Promise<string> => {
	try {
		if (!apiConfig.openai.apiKey) {
			throw new Error("OpenAI API key is not configured. Please add your API key to the .env file.");
		}

		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content: "You are a helpful and friendly AI assistant. Provide clear, concise, and accurate responses.",
				},
				...messages,
			],
			model: apiConfig.openai.model,
			temperature: apiConfig.openai.temperature,
			max_tokens: apiConfig.openai.max_tokens,
		});

		return completion.choices[0]?.message?.content || "Sorry, I could not generate a response.";
	} catch (error: any) {
		console.error("Error generating AI response:", error);

		if (error?.status === 429) {
			throw new Error("API rate limit exceeded. Please check your OpenAI account billing and limits.");
		}

		if (error?.message?.includes("API key")) {
			throw new Error("Invalid API key or API key not configured. Please check your OpenAI API key in the .env file.");
		}

		throw new Error("Failed to generate AI response. Please try again later.");
	}
};
