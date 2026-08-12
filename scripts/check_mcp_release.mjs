#!/usr/bin/env node

const packageName = "@mysten-incubation/memwal-mcp";
const minimumVersion = "0.0.7";
const registryUrl = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;

const response = await fetch(registryUrl, {
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(15_000),
});

if (!response.ok) {
    throw new Error(`npm registry returned ${response.status} for ${packageName}`);
}

const metadata = await response.json();
const latest = metadata["dist-tags"]?.latest;

if (typeof latest !== "string") {
    throw new Error(`npm registry did not return a latest version for ${packageName}`);
}

if (compareVersions(latest, minimumVersion) < 0) {
    throw new Error(
        `${packageName}@latest is ${latest}; marketplace rollout requires ${minimumVersion} or newer so post-login credentials reload without restarting Claude Code. Merge and release MystenLabs/MemWal#604 first.`,
    );
}

console.log(`${packageName}@latest ${latest} satisfies >=${minimumVersion}`);

function compareVersions(left, right) {
    const a = parseStableVersion(left);
    const b = parseStableVersion(right);

    for (let index = 0; index < 3; index += 1) {
        if (a[index] !== b[index]) return a[index] - b[index];
    }

    return 0;
}

function parseStableVersion(version) {
    const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
    if (!match) throw new Error(`Expected a stable semantic version, received ${version}`);
    return match.slice(1).map(Number);
}
