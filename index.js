const core = require('@actions/core');
// const github = require('@actions/github');

(async () => {
  try {
    const myToken = core.getInput('github-token');
    // const octokit = github.getOctokit(myToken);

    core.info(`Action is working`);
    core.info(`id token received ? ${Boolean(myToken)}`);
    // write github actions here
  } catch (error) {
    core.setFailed(error.message);
  }
})();
