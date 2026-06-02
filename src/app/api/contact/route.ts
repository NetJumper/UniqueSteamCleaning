import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json()

  if (!name && !phone && !email) {
    return NextResponse.json({ error: 'Missing contact info' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.OWNER_EMAIL!,
      replyTo: email || undefined,
      subject: `New estimate request from ${name || 'website visitor'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #7B2FBE;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name || '—'}</p>
          <p><strong>Phone:</strong> ${phone || '—'}</p>
          <p><strong>Email:</strong> ${email || '—'}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f5f5f5; padding:12px; border-radius:6px;">${message || '—'}</p>
          <hr style="margin-top:24px;" />
          <p style="color:#888; font-size:12px;">Sent from the contact form on uniquesteamers.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
