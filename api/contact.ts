import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Ultimate Forza <hello@firstnutritioninc.com>',
      to: ['joe@j4pw.com'],
      reply_to: email,
      subject: `New Inquiry from ${name} — Uforza Elite Circle`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 40px; border: 1px solid #333;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #D4AF37; font-size: 24px; letter-spacing: 0.3em; text-transform: uppercase; margin: 0;">ULTIMATE FORZA</h1>
            <p style="color: #666; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 8px 0 0;">Elite Circle Inquiry</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #fff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #D4AF37; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #888; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #ccc; font-size: 14px; line-height: 1.6;">${message}</td>
            </tr>
          </table>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #222; text-align: center;">
            <p style="color: #444; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;">Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
