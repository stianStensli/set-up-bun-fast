const core = require('@actions/core');
const exec = require('@actions/exec');


async function main(){
    try {
        await exec.exec("/bin/bash", ["-c", "curl -fsSL https://bun.sh/install | bash"])
        core.addPath(`~/.bun/bin`)
    } catch (error) {
        core.setFailed(error.message);
    }
}
core.group('Downloading bun', async () => await main()).then(() => core.notice("Bun is ready!"))
