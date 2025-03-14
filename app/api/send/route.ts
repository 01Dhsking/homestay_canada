import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nom, email, téléphone, inquiry, category, message, homeName } = await req.json();
  
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'cahomestay@protonmail.com',
      subject: `Nouveau message de contact - ${inquiry}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${téléphone}</p>
        <p><strong>Type de demande:</strong> ${inquiry}</p>
        <p><strong>Type de maison(optionel):</strong> ${category}</p>
        <p><strong>le nom de la maison(optionel):</strong> ${homeName}</p>
        <p><strong>\n\nMessage:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
