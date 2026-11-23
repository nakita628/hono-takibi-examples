import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Stytch API, official OpenAPI spec:
  // https://github.com/stytchauth/stytch-openapi/blob/ec16a0c52c21e2be8e28c1e75df7afd9d227fc55/openapi.yml
  input: 'https://raw.githubusercontent.com/stytchauth/stytch-openapi/main/openapi.yml',
  output: './src/routes.ts',
  template: { routeHandler: true },
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
    baseUrl: 'https://api.stytch.com',
  },
})
