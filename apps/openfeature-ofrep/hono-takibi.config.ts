import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // OpenFeature Remote Evaluation Protocol (OFREP), official OpenAPI spec:
  // https://github.com/open-feature/protocol/blob/98c4e0de5583c0d79dd938b82975c80125335e92/service/openapi.yaml
  input: 'https://raw.githubusercontent.com/open-feature/protocol/main/service/openapi.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:3000',
  },
})
