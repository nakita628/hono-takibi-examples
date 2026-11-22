import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/3a3cacd9-34f1-44e7-a9a7-ffe24888a624.yaml',
  output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/routes.ts',
  template: {},
  type: { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/types.ts' },
  client: { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-3a3cacd9-34f1-44e7-a9a7-ffe24888a624/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
