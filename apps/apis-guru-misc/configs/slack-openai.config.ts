import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/slack.com/openai/v1/openapi.yaml',
  output: './src/slack-openai/routes.ts',
  template: {},
  type: { output: './src/slack-openai/types.ts' },
  client: { output: './src/slack-openai/client.ts', baseUrl: '/' },
  rpc: { output: './src/slack-openai/rpc.ts', parseResponse: true },
  swr: { output: './src/slack-openai/hooks/swr.ts' },
  'tanstack-query': { output: './src/slack-openai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/slack-openai/hooks/preact-query.ts' },
  'solid-query': { output: './src/slack-openai/hooks/solid-query.ts' },
  'vue-query': { output: './src/slack-openai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/slack-openai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/slack-openai/hooks/angular-query.ts' },
  docs: {
    output: './src/slack-openai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
