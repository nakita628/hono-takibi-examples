import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/docusign.net/v2.1/openapi.yaml',
  output: './src/docusign-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/docusign-net/types.ts' },
  client: { output: './src/docusign-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/docusign-net/rpc.ts', parseResponse: true },
  swr: { output: './src/docusign-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/docusign-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/docusign-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/docusign-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/docusign-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/docusign-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/docusign-net/hooks/angular-query.ts' },
  // No docs: api.md would exceed V8's maximum string length, and the run crashes (nakita628/hono-takibi#409).
})
