export class Github {
    private GH_USERNAME: string;

    constructor(
        username: string
    ) {
        this.GH_USERNAME = username;
    }
    
    async fetchCommits(
        since: Date = new Date(Date.now() - 24 * 60 * 60 * 1000)
    ) {
        const response = await fetch(`https://api.github.com/search/commits?q=author:${this.GH_USERNAME}&sort=author-date&order=desc&page=1`, {
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": `Bearer ${process.env.GH_TOKEN}`
            }
        });
        const data = await response.json();
        return data.items.filter((commit: any) => new Date(commit.commit.author.date) > since);
    }
}