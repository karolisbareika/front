const API_URL = "http://localhost:3000";

export async function listTripEntries() {
  const response = await fetch(`${API_URL}/`);
  return response.json();
}
