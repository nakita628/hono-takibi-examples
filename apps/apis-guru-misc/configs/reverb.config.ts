import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/reverb.com/3.0/openapi.yaml',
  output: './src/reverb/routes.ts',
  template: {},
  type: { output: './src/reverb/types.ts' },
  client: { output: './src/reverb/client.ts', baseUrl: '/' },
  rpc: { output: './src/reverb/rpc.ts', parseResponse: true },
  swr: { output: './src/reverb/hooks/swr.ts' },
  'tanstack-query': { output: './src/reverb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reverb/hooks/preact-query.ts' },
  'solid-query': { output: './src/reverb/hooks/solid-query.ts' },
  'vue-query': { output: './src/reverb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reverb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reverb/hooks/angular-query.ts' },
  docs: {
    output: './src/reverb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
