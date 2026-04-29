export interface LeadData {
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  metadados: {
    url_conversao: string;
    data_hora: string;
  };
}

export async function sendLeadToCRM(data: LeadData) {
  const url = `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/ingest`;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!process.env.NEXT_PUBLIC_API_GATEWAY_URL) {
    console.warn("CRM API URL not configured.");
    return;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey || "",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`CRM API responded with ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending lead to CRM:", error);
    throw error;
  }
}
