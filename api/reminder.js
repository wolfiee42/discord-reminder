import axios from "axios";

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export default async function handler(req, res) {
  try {
    await axios.post(WEBHOOK_URL, {
      content: "⏰ Time to stretch and move around! 💪🧘",
    });
    res.status(200).json({ success: true, message: "Reminder sent!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
