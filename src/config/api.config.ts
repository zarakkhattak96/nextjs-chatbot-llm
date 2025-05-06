export const apiConfig = {
	openai: {
		apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
		model: "gpt-3.5-turbo",
		temperature: 0.7,
		max_tokens: 1000,
	},
};
