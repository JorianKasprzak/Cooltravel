export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbx-sxh8b3E42SXM3Sw95HoCIF1d7dV9lUqpXhTBql8EBfhveZ6Fe1pJKG8IDDNUFEZN/exec';

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    return res.status(200).json(result);

  } catch (error) {
    console.error('Fout bij proxy:', error);
    return res.status(500).json({ error: 'Interne serverfout bij proxy' });
  }
}
