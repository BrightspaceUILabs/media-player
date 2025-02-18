export async function generateResponse(transcript, base64ImageString, userMessage) {
	// Replace the URL with the endpoint with the current stages in api gateway
	const url = '';
	const data = {
		sessionId: '12345', // Unique identifier for user session
		transcript: transcript,
		userMessage: userMessage
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

