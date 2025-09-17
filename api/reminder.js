import axios from "axios";

export default async function handler(req, res) {
  try {
    const url = process.env.DISCORD_WEBHOOK_URL;
    if (!url) {
      return res
        .status(500)
        .json({ success: false, error: "Webhook URL not set" });
    }
    await axios.post(url, {
      content: "⏰ Time to stretch and move around! 💪🧘",
    });

    res.status(200).json({ success: true, message: "Reminder sent!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
