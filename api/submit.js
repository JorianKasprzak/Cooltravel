export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxzCgUg-c2APXjbZvSEnNyhfoDTnWrg46_zJ7Cz_PEh26G8Fkr5QXMhYF_IXnN13JI3/exec';

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
