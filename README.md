# CommitGuard GitHub Action

## Overview

CommitGuard is a GitHub Action that verifies if all commits in a pull request are signed-off by the committer. It ensures that every commit is Signed-off, indicating the committer is trusted contributor.

## Problem Description

In software development projects, ensuring the integrity of codebases is essential for maintaining high level of security. However, manually checking each commit in a pull request can be time-consuming and error-prone. CommitGuard automates this process, providing a reliable way to enforce commit signing requirements.

## How the Action Works

CommitGuard runs as a GitHub Action in response to pull request events. When triggered, it checks each commit in the pull request to ensure it contains a `commit.verification.verified = true` object. If any commits are missing the required sign-off, the action fails, and the pull request is marked as non-compliant. Furthermore, the action will comment on the pull request, telling the assignee about the violation.

## How to Contribute

Contributions to CommitGuard are welcome! To contribute, follow the guide [here](CONTRIBUTING.md)

Please ensure your pull request adheres to the project's coding standards and includes tests for any new features or bug fixes.

## How to Report Security Issues

To report security vulnerabilities or other sensitive issues, please refert to our [Security Policy](SECURITY.md).
We take security seriously and appreciate your help in disclosing vulnerabilities responsibly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
