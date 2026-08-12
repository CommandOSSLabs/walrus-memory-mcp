# Hosted Claude Custom Connector

> **Status: experimental, not production-ready.** The remote MCP OAuth work this
> connector depends on ([MystenLabs/MemWal#584](https://github.com/MystenLabs/MemWal/pull/584))
> is still under active security review. Do not present this flow as ready to end
> users, and do not claim `tools/list` or memory-tool calls have been verified
> working end to end against the hosted endpoint. Use the local stdio + delegate-key
> setup (`docs/usage/claude-code.md`, `docs/usage/codex.md`, `docs/usage/other-clients.md`)
> instead until that PR is merged and the live smoke test is confirmed.

This repo is for the local plugin package. The hosted Claude custom connector is a separate remote MCP surface that uses OAuth.

Once the OAuth work above is accepted, the expected connector URL for Claude's native custom connector UI is:

```text
https://relayer.dev.memwal.ai/api/mcp
```

Discovery endpoints:

```text
https://relayer.dev.memwal.ai/.well-known/oauth-authorization-server
https://relayer.dev.memwal.ai/.well-known/oauth-protected-resource
```

Expected flow, once ready:

1. Add `https://relayer.dev.memwal.ai/api/mcp` in Claude's connector UI.
2. Claude discovers OAuth metadata.
3. The browser opens the Walrus Memory consent page.
4. The user connects a wallet and approves access.
5. Claude can call `tools/list` and memory tools without manual delegate keys or custom headers.

This hosted connector flow is independent of the Claude Code marketplace plugin, which uses local stdio MCP and delegate-key custom-header auth.
