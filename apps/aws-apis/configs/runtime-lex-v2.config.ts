import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/runtime.lex.v2/2020-08-07/openapi.yaml',
  output: './src/runtime-lex-v2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/runtime-lex-v2/types.ts' },
  client: { output: './src/runtime-lex-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/runtime-lex-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/runtime-lex-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/runtime-lex-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/runtime-lex-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/runtime-lex-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/runtime-lex-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/runtime-lex-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/runtime-lex-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/runtime-lex-v2/api.md',
    curl: true,
    baseUrl: 'https://runtime-lex-v2.us-east-1.amazonaws.com',
  },
})
