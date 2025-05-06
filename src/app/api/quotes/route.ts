import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://zenquotes.io/api/quotes", {
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 3600, // Cache for 1 hour
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch quotes");
		}

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error fetching quotes:", error);
		return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
	}
}
