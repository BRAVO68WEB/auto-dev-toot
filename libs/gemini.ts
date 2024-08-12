export const summarize = async (message_template: string, api_key: string) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${api_key}`;
    const headers = {
        "Content-Type": "application/json",
    };
    const data = JSON.stringify({
        contents: [
            {
                parts: [
                    {
                        text: `Generate a Mastodon Post, where I as a developer am giving you my Github Commit history for last 24 hrs, you have to create a summary of it highlighting the development progress in 500 characters. Don't give markdown output. Don't say in 2nd person, instead say in first person using 'I'. Also Generate some hash tags\n\n${message_template}`,
                    },
                ],
            },
        ],
    });

    const reqConfig = {
        method: "post",
        url,
        headers,
        data,
    };

    const resp = await fetch(reqConfig.url, {
        body: reqConfig.data,
        headers: reqConfig.headers,
        method: reqConfig.method,
    });

    const responseData = await resp.json();
    return responseData.candidates[0].content.parts[0].text;
};