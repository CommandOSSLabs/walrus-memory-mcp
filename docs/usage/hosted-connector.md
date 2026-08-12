# Hosted Claude custom connector

The hosted Claude custom connector is a separate remote MCP surface that uses OAuth. It does not use this Claude Code plugin's local delegate-key credentials.

The OAuth implementation and security review were completed in [MystenLabs/MemWal#584](https://github.com/MystenLabs/MemWal/pull/584). Live Claude testing on the development environment confirmed tool discovery plus representative `memwal_remember` and `memwal_recall` calls.

## Development endpoint

Use this URL for development testing:

```text
https://relayer.dev.memwal.ai/api/mcp
```

Discovery endpoints:

```text
https://relayer.dev.memwal.ai/.well-known/oauth-authorization-server
https://relayer.dev.memwal.ai/.well-known/oauth-protected-resource
```

Expected flow:

1. Add the MCP URL in Claude's custom connector UI.
2. Claude discovers the OAuth metadata.
3. The browser opens the Walrus Memory consent page.
4. The user connects a wallet and approves access.
5. Claude can discover and call the granted memory tools without manual delegate keys or custom headers.

## Production submission

The development endpoint is validated, but the official connector should be submitted only after the merged relayer and app are promoted through staging to production and the same smoke test passes against the production URL.

This hosted connector flow is independent of the Claude Code marketplace plugin, which uses local stdio MCP and the published `@mysten-incubation/memwal-mcp` package.
