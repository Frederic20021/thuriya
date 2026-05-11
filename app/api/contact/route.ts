import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT = process.env.CONTACT_RECIPIENT ?? "frederic123.bf@gmail.com";

export async function POST(request: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, email, service, message } = body;

  if (!name?.trim() || !email?.trim()) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "THURIYA Contact Form <onboarding@resend.dev>",
    to: RECIPIENT,
    replyTo: email,
    subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#BC002D;margin-bottom:24px">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;width:130px;vertical-align:top">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;vertical-align:top">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;vertical-align:top">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${service ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;vertical-align:top">Service</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee">${escapeHtml(service)}</td>
          </tr>` : ""}
          ${message ? `<tr>
            <td style="padding:10px 0;font-weight:600;vertical-align:top">Message</td>
            <td style="padding:10px 0;white-space:pre-wrap">${escapeHtml(message)}</td>
          </tr>` : ""}
        </table>
        <p style="color:#888;font-size:12px;margin-top:32px">Sent via THURIYA Japanese Education Centre contact form</p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  return Response.json({ success: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
