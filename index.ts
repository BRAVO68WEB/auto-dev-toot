import { app } from "./app";
import { notify } from "./libs/notify";

try {
    console.log("Posting Mastodon Status");
    await app();
    await notify(process.env.NOTIFY_URL!,"Success");
    console.log("Posted Mastodon Status");
} catch (error) {
    console.error("Failed to post Mastodon Status");
    console.error(error);
    await notify(process.env.NOTIFY_URL!,"Failed");
}