import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codeartifact/2018-09-22/openapi.yaml',
  output: './src/codeartifact/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codeartifact/types.ts' },
  client: { output: './src/codeartifact/client.ts', baseUrl: '/' },
  rpc: { output: './src/codeartifact/rpc.ts', parseResponse: true },
  swr: { output: './src/codeartifact/hooks/swr.ts' },
  'tanstack-query': { output: './src/codeartifact/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codeartifact/hooks/preact-query.ts' },
  'solid-query': { output: './src/codeartifact/hooks/solid-query.ts' },
  'vue-query': { output: './src/codeartifact/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codeartifact/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codeartifact/hooks/angular-query.ts' },
  docs: {
    output: './src/codeartifact/api.md',
    curl: true,
    baseUrl: 'https://codeartifact.us-east-1.amazonaws.com',
  },
})
