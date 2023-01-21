const core = require('@actions/core');
const exec = require('@actions/exec');


try {
    await exec.exec("curl -fsSL https://bun.sh/install | bash")
    core.addPath(`${HOME}/.bun/.bun/bin/`)
    console.log("done...")
} catch (error) {
    core.setFailed(error.message);
}