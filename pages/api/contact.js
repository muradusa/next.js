import nodemailer from "nodemailer";

export default async (req, res) => {
  const { first_name, last_name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    auth: {
      user: "mcholukov@welyons.com",
      pass: "Neb1raska!",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "mcholukov@welyons.com",
      subject: `Contact form submission from ${first_name}`,
      html: `
      <p>First Name: ${first_name}</p><br>
      <p>Last Name: ${last_name}</p><br>
      <p>Email</p>: ${email}</p><br>
      <p>Phone: ${phone}</p><br>
      <p>Subject: ${subject}</p><br>
      <p>Message: ${message}</p><br>

   `,
    });
    console.log("Message Sent", emailRes.messageId);
  } catch (error) {
    console.log(error);
  }

  console.log(req.body);
  res.status(200).json(req.body);
};
