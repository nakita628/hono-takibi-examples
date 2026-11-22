import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/policytroubleshooter/v1/openapi.yaml',
  output: './src/policytroubleshooter/routes.ts',
  template: {},
  type: { output: './src/policytroubleshooter/types.ts' },
  client: { output: './src/policytroubleshooter/client.ts', baseUrl: '/' },
  rpc: { output: './src/policytroubleshooter/rpc.ts', parseResponse: true },
  swr: { output: './src/policytroubleshooter/hooks/swr.ts' },
  'tanstack-query': { output: './src/policytroubleshooter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/policytroubleshooter/hooks/preact-query.ts' },
  'solid-query': { output: './src/policytroubleshooter/hooks/solid-query.ts' },
  'vue-query': { output: './src/policytroubleshooter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/policytroubleshooter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/policytroubleshooter/hooks/angular-query.ts' },
  docs: {
    output: './src/policytroubleshooter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
