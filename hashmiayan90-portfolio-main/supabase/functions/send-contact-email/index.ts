const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();
    
    console.log("Received contact form submission:", { name, email, message: message.substring(0, 50) + "..." });

    // Send notification email to you
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["hashmiayan90@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Reply directly to this email to respond to ${name}.</em></p>
        `,
        reply_to: email,
      }),
    });

    if (!notificationRes.ok) {
      const errorData = await notificationRes.text();
      console.error("Failed to send notification email:", errorData);
      throw new Error(`Failed to send notification email: ${errorData}`);
    }

    const notificationData = await notificationRes.json();
    console.log("Notification email sent:", notificationData);

    // Send confirmation email to the sender
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Md Ayan Hashmi <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for reaching out!",
        html: `
          <h1>Thank you for contacting me, ${name}!</h1>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="border-left: 3px solid #6366f1; padding-left: 15px; color: #666;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <p>Best regards,<br>Md Ayan Hashmi</p>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      console.error("Failed to send confirmation email:", await confirmationRes.text());
    } else {
      const confirmationData = await confirmationRes.json();
      console.log("Confirmation email sent:", confirmationData);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
