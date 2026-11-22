import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/personio.de/authentication/1.0/openapi.yaml',
  output: './src/personio-de-authentication/routes.ts',
  template: {},
  type: { output: './src/personio-de-authentication/types.ts' },
  client: { output: './src/personio-de-authentication/client.ts', baseUrl: '/' },
  rpc: { output: './src/personio-de-authentication/rpc.ts', parseResponse: true },
  swr: { output: './src/personio-de-authentication/hooks/swr.ts' },
  'tanstack-query': { output: './src/personio-de-authentication/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/personio-de-authentication/hooks/preact-query.ts' },
  'solid-query': { output: './src/personio-de-authentication/hooks/solid-query.ts' },
  'vue-query': { output: './src/personio-de-authentication/hooks/vue-query.ts' },
  'svelte-query': { output: './src/personio-de-authentication/hooks/svelte-query.ts' },
  'angular-query': { output: './src/personio-de-authentication/hooks/angular-query.ts' },
  docs: {
    output: './src/personio-de-authentication/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
