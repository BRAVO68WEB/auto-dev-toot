export class Github {
    private github_username: string;

    constructor(
        username: string
    ) {
        this.github_username = username;
    }
    
    async fetchCommits(
        since: Date = new Date(Date.now() - 24 * 60 * 60 * 1000)
    ) {
        const response = await fetch(`https://api.github.com/search/commits?q=author:${this.github_username}&sort=author-date&order=desc&page=1`, {
            headers: {
                "Accept": "application/vnd.github.v3+json"
            }
        });
        const data = await response.json();
        return data.items.filter((commit: any) => new Date(commit.commit.author.date) > since);
    }
}