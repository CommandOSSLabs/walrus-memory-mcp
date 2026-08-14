# Walrus Memory Claude Code plugin

Walrus Memory gives Claude Code durable, user-owned memory through the published `@mysten-incubation/memwal-mcp` server.

This repository is the marketplace plugin handoff requested for Claude Code. It contains only plugin packaging and user guidance. The MCP SDK source, tests, versioning, and npm release workflow remain canonical in [`MystenLabs/MemWal/packages/mcp`](https://github.com/MystenLabs/MemWal/tree/dev/packages/mcp).

## Included

- Claude Code plugin manifest: `.claude-plugin/plugin.json`
- MCP server config: `.mcp.json`
- Slash commands: `commands/`
- Setup skill: `skills/setup/`
- Lifecycle hooks: `hooks/hooks.json`
- Usage documentation: `docs/usage/`

The plugin starts the published MCP package with `npx`; this repository does not publish a second SDK package.

## Validate locally

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

## Commands

- `/memwal:setup`
- `/memwal:health`
- `/memwal:remember`
- `/memwal:recall`
- `/memwal:analyze`
- `/memwal:restore`
- `/memwal:logout`

## Authentication

The Claude Code plugin uses local stdio MCP and the existing delegate-key login flow. `memwal_login` opens the browser setup flow and stores credentials locally at:

```text
~/.memwal/credentials.json
```

Do not paste this file or its private key into chat.

The hosted Claude custom connector is a separate remote OAuth surface. See [`docs/usage/hosted-connector.md`](docs/usage/hosted-connector.md).

## Ownership handoff

This public repository is temporarily hosted under CommandOSSLabs for preparation. It is intended for transfer to MystenLabs before official marketplace submission.

## License

Apache-2.0
