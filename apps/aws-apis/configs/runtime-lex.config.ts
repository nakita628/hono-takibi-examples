import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/runtime.lex/2016-11-28/openapi.yaml',
  output: './src/runtime-lex/routes.ts',
  template: {},
  type: { output: './src/runtime-lex/types.ts' },
  client: { output: './src/runtime-lex/client.ts', baseUrl: '/' },
  rpc: { output: './src/runtime-lex/rpc.ts', parseResponse: true },
  swr: { output: './src/runtime-lex/hooks/swr.ts' },
  'tanstack-query': { output: './src/runtime-lex/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/runtime-lex/hooks/preact-query.ts' },
  'solid-query': { output: './src/runtime-lex/hooks/solid-query.ts' },
  'vue-query': { output: './src/runtime-lex/hooks/vue-query.ts' },
  'svelte-query': { output: './src/runtime-lex/hooks/svelte-query.ts' },
  'angular-query': { output: './src/runtime-lex/hooks/angular-query.ts' },
  docs: {
    output: './src/runtime-lex/api.md',
    curl: true,
    baseUrl: 'https://runtime-lex.us-east-1.amazonaws.com',
  },
})
