import { httpClient } from "@/src/utils/httpClient.util";

interface Quote {
	q: string; // quote text
	a: string; // author
	c: string; // citation number
	h: string; // HTML format
}

export const fetchQuotesAction = async (): Promise<Quote[]> => {
	try {
		const response = await httpClient.get<Quote[]>("/quotes");
		return response.data;
	} catch (error) {
		console.error("Error fetching quotes:", error);
		throw error;
	}
};
