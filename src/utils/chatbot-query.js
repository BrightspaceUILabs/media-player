export async function generateResponse(snapshot) {
	// Replace the URL with the endpoint with the current stages in api gateway
	const url = '';
	const data = {
		sessionId: '12345', // Unique identifier for user session
		snapshot: snapshot
	};

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

