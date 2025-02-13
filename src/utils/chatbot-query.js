export async function generateResponse(transcript, base64ImageString, question) {
	// Replace the URL with the endpoint with the current stages in api gateway
	const url = '';
	const data = {
		prompt: `Here is a video transcript: "${transcript}" and here is the screenshot of the video when the question was asked.
		Please answer this question base on the video: "${question}"
		Simply answer the question and don't say base on trasncript or screenshot.`,
	};

	if (base64ImageString !== null && base64ImageString !== '' && base64ImageString !== undefined) {
		data.image = base64ImageString;
	}

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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

