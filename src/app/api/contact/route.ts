import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!name || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const errors: string[] = [];

  // ── Send Email ──────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: "Unique Steamers Website <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL!,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6D28D9;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email || "Not provided"}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${message}</td></tr>
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 12px;">Sent from your Unique Steamers website contact form.</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Email error:", err);
    errors.push("email");
  }

  // ── Send SMS ────────────────────────────────────────────────
  try {
    await twilioClient.messages.create({
      body: `New quote request!\nName: ${name}\nPhone: ${phone || "N/A"}\nEmail: ${email || "N/A"}\nMessage: ${message}`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: process.env.OWNER_PHONE!,
    });
  } catch (err) {
    console.error("SMS error:", err);
    errors.push("sms");
  }

  if (errors.length === 2) {
    return NextResponse.json({ error: "Failed to send notifications" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
