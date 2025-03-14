import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        token: process.env.PUSHOVER_API_TOKEN as string,
        user: process.env.PUSHOVER_USER_KEY as string,
        title: 'HomeStay CA',
        message: 'Un client nous a écrit',
        priority: '1',
        device: 'Dhsking',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send notification');
    }

    return NextResponse.json(
      { message: 'Message envoyé avec succès!' },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du message pushover : ", error);
    return NextResponse.json(
      { message: "Échec de l'envoi du message pushover" },
      { status: 500 },
    );
  }
}