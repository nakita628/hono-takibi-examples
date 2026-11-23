import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/i-cue.solutions/v1/openapi.yaml',
  output: './src/i-cue-solutions/routes.ts',
  template: {},
  type: { output: './src/i-cue-solutions/types.ts' },
  client: { output: './src/i-cue-solutions/client.ts', baseUrl: '/' },
  rpc: { output: './src/i-cue-solutions/rpc.ts', parseResponse: true },
  swr: { output: './src/i-cue-solutions/hooks/swr.ts' },
  'tanstack-query': { output: './src/i-cue-solutions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/i-cue-solutions/hooks/preact-query.ts' },
  'solid-query': { output: './src/i-cue-solutions/hooks/solid-query.ts' },
  'vue-query': { output: './src/i-cue-solutions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/i-cue-solutions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/i-cue-solutions/hooks/angular-query.ts' },
  docs: {
    output: './src/i-cue-solutions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
