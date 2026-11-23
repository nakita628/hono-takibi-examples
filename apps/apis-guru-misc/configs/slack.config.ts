import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/slack.com/1.7.0/openapi.yaml',
  output: './src/slack/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/slack/types.ts' },
  client: { output: './src/slack/client.ts', baseUrl: '/' },
  rpc: { output: './src/slack/rpc.ts', parseResponse: true },
  swr: { output: './src/slack/hooks/swr.ts' },
  'tanstack-query': { output: './src/slack/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/slack/hooks/preact-query.ts' },
  'solid-query': { output: './src/slack/hooks/solid-query.ts' },
  'vue-query': { output: './src/slack/hooks/vue-query.ts' },
  'svelte-query': { output: './src/slack/hooks/svelte-query.ts' },
  'angular-query': { output: './src/slack/hooks/angular-query.ts' },
  docs: {
    output: './src/slack/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
