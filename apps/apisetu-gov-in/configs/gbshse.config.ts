import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gbshse/3.0.0/openapi.yaml',
  output: './src/gbshse/routes.ts',
  template: {},
  type: { output: './src/gbshse/types.ts' },
  client: { output: './src/gbshse/client.ts', baseUrl: '/' },
  rpc: { output: './src/gbshse/rpc.ts', parseResponse: true },
  swr: { output: './src/gbshse/hooks/swr.ts' },
  'tanstack-query': { output: './src/gbshse/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gbshse/hooks/preact-query.ts' },
  'solid-query': { output: './src/gbshse/hooks/solid-query.ts' },
  'vue-query': { output: './src/gbshse/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gbshse/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gbshse/hooks/angular-query.ts' },
  docs: {
    output: './src/gbshse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
