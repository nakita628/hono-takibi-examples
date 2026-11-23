import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/hackathonwatch.com/0.1/openapi.yaml',
  output: './src/hackathonwatch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/hackathonwatch/types.ts' },
  client: { output: './src/hackathonwatch/client.ts', baseUrl: '/' },
  rpc: { output: './src/hackathonwatch/rpc.ts', parseResponse: true },
  swr: { output: './src/hackathonwatch/hooks/swr.ts' },
  'tanstack-query': { output: './src/hackathonwatch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hackathonwatch/hooks/preact-query.ts' },
  'solid-query': { output: './src/hackathonwatch/hooks/solid-query.ts' },
  'vue-query': { output: './src/hackathonwatch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hackathonwatch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hackathonwatch/hooks/angular-query.ts' },
  docs: {
    output: './src/hackathonwatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
