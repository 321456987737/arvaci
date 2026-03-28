import nodemailer from "nodemailer";

export async function POST(req) {
  try {
   console.log(1)
    const { name, email, subject, message } = await req.json();

   console.log(1)
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

   console.log(1)
    // Email to YOU (admin)
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "ifti.hazara205@gmail.com", // 👈 YOUR EMAIL
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

   console.log(1)
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to USER
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message!",
      text: `Hi ${name}, thanks for contacting us. We'll get back to you soon.`,
    };

    await transporter.sendMail(userMail);

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}