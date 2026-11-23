import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codeguru-reviewer/2019-09-19/openapi.yaml',
  output: './src/codeguru-reviewer/routes.ts',
  template: {},
  type: { output: './src/codeguru-reviewer/types.ts' },
  client: { output: './src/codeguru-reviewer/client.ts', baseUrl: '/' },
  rpc: { output: './src/codeguru-reviewer/rpc.ts', parseResponse: true },
  swr: { output: './src/codeguru-reviewer/hooks/swr.ts' },
  'tanstack-query': { output: './src/codeguru-reviewer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codeguru-reviewer/hooks/preact-query.ts' },
  'solid-query': { output: './src/codeguru-reviewer/hooks/solid-query.ts' },
  'vue-query': { output: './src/codeguru-reviewer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codeguru-reviewer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codeguru-reviewer/hooks/angular-query.ts' },
  docs: {
    output: './src/codeguru-reviewer/api.md',
    curl: true,
    baseUrl: 'https://codeguru-reviewer.us-east-1.amazonaws.com',
  },
})
