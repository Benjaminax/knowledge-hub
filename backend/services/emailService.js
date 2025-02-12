import nodemailer from 'nodemailer';

export const sendEmail = async (recipient, subject, body, attachmentPath) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: subject,
      text: body,
      attachments: attachmentPath ? [{ path: attachmentPath }] : [],
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", recipient);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};
