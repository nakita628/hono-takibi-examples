import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lex-models/2017-04-19/openapi.yaml',
  output: './src/lex-models/routes.ts',
  template: {},
  type: { output: './src/lex-models/types.ts' },
  client: { output: './src/lex-models/client.ts', baseUrl: '/' },
  rpc: { output: './src/lex-models/rpc.ts', parseResponse: true },
  swr: { output: './src/lex-models/hooks/swr.ts' },
  'tanstack-query': { output: './src/lex-models/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lex-models/hooks/preact-query.ts' },
  'solid-query': { output: './src/lex-models/hooks/solid-query.ts' },
  'vue-query': { output: './src/lex-models/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lex-models/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lex-models/hooks/angular-query.ts' },
  docs: {
    output: './src/lex-models/api.md',
    curl: true,
    baseUrl: 'https://lex-models.us-east-1.amazonaws.com',
  },
})
