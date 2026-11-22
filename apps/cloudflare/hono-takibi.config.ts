import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Cloudflare API: https://github.com/cloudflare/api-schemas
  input: 'https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json',
  output: './src/routes.ts',
  template: {},
  // No type output: nine response properties have enum: [[]], which the type output writes as `errors:;`
  // and the run aborts (nakita628/hono-takibi#504).
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.cloudflare.com/client/v4',
  },
})
