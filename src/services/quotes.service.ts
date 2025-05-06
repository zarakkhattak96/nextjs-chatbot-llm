import { httpClient } from "../utils/httpClient.util";
import { ROUTES } from "../routes";

export const fetchQuotes = async () => {
	try {
		const resp = await httpClient.get(ROUTES.QUOTES_ROUTES.QUOTES);

		return resp.data;
	} catch (err) {
		console.error(err);
		return {
			success: false,
			data: null,
			error: err as never,
		};
	}
};
