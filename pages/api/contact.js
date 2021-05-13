import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: true,
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    // tls: {
    //   ciphers: "SSLv3",
    // },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "muradwebdev@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `
      <p>First Name: ${name}</p><br>
    
      <p>Email: ${email}</p><br>
      
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
