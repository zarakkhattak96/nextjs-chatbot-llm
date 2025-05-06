import { httpClient } from "@/src/utils/httpClient.util";

interface Quote {
	q: string;
	a: string;
	c: string;
	h: string;
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
