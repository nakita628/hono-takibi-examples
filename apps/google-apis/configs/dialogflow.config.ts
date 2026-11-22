import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dialogflow/v3beta1/openapi.yaml',
  output: './src/dialogflow/routes.ts',
  template: {},
  type: { output: './src/dialogflow/types.ts' },
  client: { output: './src/dialogflow/client.ts', baseUrl: '/' },
  rpc: { output: './src/dialogflow/rpc.ts', parseResponse: true },
  swr: { output: './src/dialogflow/hooks/swr.ts' },
  'tanstack-query': { output: './src/dialogflow/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dialogflow/hooks/preact-query.ts' },
  'solid-query': { output: './src/dialogflow/hooks/solid-query.ts' },
  'vue-query': { output: './src/dialogflow/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dialogflow/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dialogflow/hooks/angular-query.ts' },
  docs: {
    output: './src/dialogflow/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
