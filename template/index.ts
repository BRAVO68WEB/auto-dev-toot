export interface CommitMessage {
    repo_name: string;
    commit_message: string;
}

export const templateGenerator = (commits: CommitMessage[]) => {
    let message_template = "";
    commits.forEach((commit) => {
        message_template += `Repo: ${commit.repo_name}\nCommit: ${commit.commit_message}\n\n`;
    });
    return message_template;
}