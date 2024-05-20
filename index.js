const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    try {
        const owner = core.getInput('owner', { required: true });
        const repo = core.getInput('repo', { required: true });
        const pr_number = core.getInput('pr_number', { required: true });
        const token = core.getInput('token', { required: true });

        const octokit = new github.getOctokit(token);

        const listCommitsResponse = await octokit.rest.pulls.listCommits({
            owner,
            repo,
            pull_number: pr_number,
        });
        const commits = listCommitsResponse.data;
        let unsignedCommitsCount = 0;

        for (const commit of commits) {
            if (!commit.commit.verification.verified) {
                unsignedCommitsCount++;
            }
        }

        if (unsignedCommitsCount > 0) {
            const commentBody = "### :warning: Unsigned Commits detected :warning:\n"
            + `${unsignedCommitsCount}`+ " unsigned commit(s) have been detected in this Pull Request " +`(Nr.: #${pr_number})`+ ".\n\n"
            + "Please make sure to **sign-off your commits** before pushing."
            await octokit.rest.issues.createComment({
                owner,
                repo,
                issue_number: pr_number,
                body: commentBody
            });
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();