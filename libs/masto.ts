import { createRestAPIClient } from "masto";

export class Mastodon {
    private masto_client: ReturnType<typeof createRestAPIClient>;

    constructor(
        instance: string,
        accessToken: string
    ) {
        this.masto_client = createRestAPIClient({
            url: instance,
            accessToken: accessToken,
        });
    }

    async postStatus(
        content: string,
    ) {
        return await this.masto_client.v1.statuses.create({
            allowedMentions: [
                "bravo68web"
            ],
            status: content,
            visibility: "public",
            language: "en",
        })
    }
}