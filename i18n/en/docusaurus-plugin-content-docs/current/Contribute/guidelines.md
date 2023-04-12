---
sidebar_position: 1
title: contribution guide 
sidebar_label: contribution guide
---
**Welcome to Bestchains!**

We encourage you to contribute to the community by reporting problems, improving documents, fixing bugs or adding new features!

Currently, our code of conduct follows [CNCF's Code of Conduct](https://github.com/cncf/foundation/blob/main/code-of-conduct.md), which details how you should conduct yourself as a member of the Bestchains community.

## Project Composition

Bestchains consists of several projects:

- [fabric-operator](https://github.com/bestchains/fabric-operator): Blockchain management service implemented based on the Kubernetes Operator framework.
- [bc-console](https://github.com/bestchains/bc-console) and [bc-apis](https://github.com/bestchains/bc-apis): Console for Bestchains
- [installer](https://github.com/bestchains/installer): Helm charts related to the installation of the Bestchains platform.
- [bc-explorer](https://github.com/bestchains/bc-explorer): Blockchain Browser
- [bestchains-contracts](https://github.com/bestchains/bestchains-contracts): Secure smart contract development library

## Reporting Issues

While using or experiencing Bestchains-related components, you may have some feedback on this project. Therefore, please feel free to open an issue. This includes but is not limited to:

- Report bugs
- Request new features
- Performance issues
- New feature draft
- New feature design
- Need help
- Document improvement
- Test improvement
- Any other questions about these projects
- etc.

Also, we must remind you that when submitting a new issue, please remember to remove **sensitive data** from your issue.

*Sensitive data may be passwords, keys, network locations, business data, etc.*

## Code and Document Contribution

We encourage everyone to contribute to making Bestchains better. On GitHub, every improvement to Bestchains can be achieved through PR (pull request).

- If you find a typo, try to fix it!
- If you find a bug, try to fix it!
- If you find some redundant codes, try to remove them!
- If you find some test cases missing, try to add them!
- If you could enhance a feature, please DO NOT hesitate!
- If you find code implicit, try to add comments to make it clear!
- If you find code ugly, try to refactor that!
- If you can help to improve documents, it could not be better!
- If you find document incorrect, just do it and fix that!
- etc.

### PR Process

To submit a PR, we assume that you have registered a GitHub ID. Then you can follow these steps to get ready:

1. **Fork** The project you want to work on. You only need to click the Fork button on the top left corner of the project homepage. On the left side of the repository's main page. Then you can see your repository in your GitHub username.
2. **Clone** your own repository to your local machine for development. Use `git clone https://github.com/<your-username>/<your-project>.git` to clone the code repository to your local machine. Then you can create a new branch to complete the changes you want to make.
3. **Set remote upstream** The upstream setting is `https://github.com/bestchains/<project>.git` For example:

   ```bash
   git remote add upstream https://github.com/bestchains/fabric-operator.git
   git remote set-url --push upstream no-pushing
   ```

   Adding upstream allows us to easily synchronize local branches with upstream branches.
4. **Create a branch** to add new features or fix problems. Update the local working directory:

   ```bash
   cd <project>
   git fetch upstream
   git checkout main
   git rebase upstream/main
   ```

   Create a new Branch:

   ```bash
   git checkout -b <new-branch>
   ```

   You can build and test your code after the new branch is changed.

### PR Description

Creating a PR is the only way to modify files in the Bestchains project.

To help reviewers better understand the purpose of the PR you've created, the description should not be too rough.

### Proposal

If you want to contribute a function with a new API or requires a lot of work, please submit a proposal first.

## Contributing to Anything

We choose GitHub as the primary place for Bestchains collaboration, so the latest updates of Bestchains are always here. Although contributing through PRs is a clear way to help, we still call for any other ways:

- reply to other's issues if you could;
- help solve other user's problems;
- help review other's PR design;
- help review other's codes in PR;
- discuss about Bestchains to make things clearer;
- advocate Bestchains technology beyond GitHub;
- write blogs on Bestchains and so on.

## Join the community

If you want to become a member of the Bestchains GitHub organization, please refer to the following instructions:

### Join the Bestchains Github organization

Before requesting to join the community, we ask that you make a small contribution to prove that you are willing to continue contributing to Bestchains.

- **Note** Anyone can contribute to Bestchains, and joining the Bestchains Github organization is not a mandatory step.

There are many ways to contribute to Bestchains:

- Submit PRs
- Report errors or provide feedback on issues
- Answer questions on GitHub

#### Submit your application

- Create a issue in the Bestchains repository and list all the work you have done as much as possible.
- Please ask AT 2 existing reviewers for consent.
- After the request is approved, the administrator will send you an invitation.
  - This is a manual process, which usually runs several times a week.
  - If a week has passed and you haven't received the invitation, please contact us by email or DingTalk.
