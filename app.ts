import { Github } from "./libs/github";
import { summarize } from "./libs/gemini";
import { Mastodon } from "./libs/masto";
import { templateGenerator } from "./template";
import type { CommitMessage } from "./template";

const github = new Github(process.env.GH_USERNAME!);
const masto = new Mastodon(process.env.MASTODON_INSTANCE!, process.env.MASTODON_ACCESS_TOKEN!);

export const app = async () => {
    let commits = await github.fetchCommits();
    const ignoreRepoList = ["BRAVO68WEB/github-stats", "BRAVO68WEB/BRAVO68WEB", "BRAVO68WEB/rusty-alternatives"];
    commits = commits.filter((commit: any) => !ignoreRepoList.includes(commit.repository.full_name));
    const CommitMessages: CommitMessage[] = commits.map((commit: any) => {
        return {
            repo_name: commit.repository.full_name,
            commit_message: commit.commit.message,
        }
    });
    const message_template = templateGenerator(CommitMessages);
    const summary = await summarize(message_template, process.env.GEMINI_API_KEY!);
    await masto.postStatus(summary);
}