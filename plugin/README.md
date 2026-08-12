# Walrus Memory — Claude Code plugin

This directory packages the Walrus Memory MCP server (from the repo root) as a Claude Code
marketplace plugin, and also ships MCP configs for Codex, Cursor, and Antigravity.

## What is included

- Claude Code plugin manifest: `.claude-plugin/plugin.json`
- MCP server config: `.mcp.json`
- Slash commands: `commands/`
- Setup skill: `skills/setup/`
- Lifecycle hooks: `hooks/hooks.json`
- Optional Codex hook installer: `scripts/install_codex_hooks.mjs`

## Quick start (Claude Code local review)

```bash
claude plugin validate . --strict
claude --plugin-dir .
```

Inside Claude Code:

```text
/memwal:setup
/memwal:health
/memwal:remember I use Walrus Memory from Claude Code.
/memwal:recall Claude Code Walrus Memory setup
```

## Codex (MCP-only testing)

Add this to `~/.codex/config.toml`:

```toml
[mcp_servers.memwal]
command = "npx"
args = ["-y", "@mysten-incubation/memwal-mcp", "--label", "Codex"]
```

See `docs/usage/codex.md` at the repo root for the full setup and testing guide.

## Detailed guides

- Claude Code: `../docs/usage/claude-code.md`
- Codex: `../docs/usage/codex.md`
- OpenCode, Cursor, Claude Desktop: `../docs/usage/other-clients.md`
- Hosted Claude custom connector (**experimental, not production-ready** — see the warning
  in that doc): `../docs/usage/hosted-connector.md`

## Known open items (not resolved by this port)

- The published `@mysten-incubation/memwal-mcp` npm package and this repo's `plugin/`
  directory still carry two slightly different hook manifests
  (`plugin/hooks.json` vs `plugin/hooks/hooks.json`). Establishing one canonical
  source is tracked separately — see the Notion task for
  "Add Claude custom-connector compatibility to remote MCP".
- Plugin manifest attribution (`author: "Mysten Labs"` in a CommandOSSLabs-owned repo)
  has not been formally confirmed with Mysten Labs branding/ownership approval.
