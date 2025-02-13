export async function generateResponse(transcript, question) {
	// Replace the URL with the endpoint with the current stages in api gateway
	const url = '';
	const data = {
		prompt: `Here is a video transcript: "${transcript}". Please answer this question base on the video: "${question}"`
	};
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: JSON.stringify(data)
		});
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return await response.json();
	}
	catch (error) {
		console.error('Error:', error);
	}
}
