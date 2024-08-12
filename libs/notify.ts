export const notify = async (url: string, status: string) => {
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: "Posting Mastodon Status : " + status,
        }),
    })
}