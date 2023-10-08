var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------

export default function handler(req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "quayej923@gmail.com",
      pass: "qstt vxzw tzqb drjq",
    },
  });

  const message = {
    from: "quayej923@gmail.com",
    to: "Nerepondepas@gmail.com",
    subject: "New Data recieved",
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
