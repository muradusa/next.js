import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: true,
    port: 587,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  transporter.set("oauth2_provision_cb", (user, renew, callback) => {
    let accessToken = userTokens[user];
    if (!accessToken) {
      return callback(new Error("Unknown user"));
    } else {
      return callback(null, accessToken);
    }
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
