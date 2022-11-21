import rateLimit from "../../utils/rate-limit";
import { Webhook, MessageBuilder } from "webhook-discord";
const Hook = new Webhook(process.env.DISCORD_WEBHOOK);

const limiter = rateLimit({
  interval: 60 * 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export default async function handler(req, res) {
  try {
    await limiter.check(res, 3, "CACHE_TOKEN");
    if (req.method === "POST") {
      const msg = new MessageBuilder()
        .setName(req.body.from)
        .addField("Name", req.body.from, true)
        .addField("Email", req.body.email, true)
        .setTime();

      const isi = new MessageBuilder()
        .setName(req.body.from)
        .setDescription(req.body.msg);

      try {
        await Hook.send(msg);
        await Hook.send(isi);
        res.status(200).json({
          type: "success",
          message: "Your message successfully sended!",
        });
      } catch (e) {
        res.status(500).json({
          type: "error",
          message: "internal server error",
        });
      }
    } else {
      res
        .status(405)
        .json({
          type: "error",
          message: "method not allowed",
        });
    }
  } catch {
    //rate limited
    res
      .status(429)
      .json({
        type: "error",
        message: "To avoid spam, we limit to only 2 messages sent per ip in an hour...",
      });
  }
}
