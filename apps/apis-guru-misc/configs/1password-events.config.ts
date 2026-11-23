import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/1password.com/events/1.0.0/openapi.yaml',
  output: './src/1password-events/routes.ts',
  template: {},
  type: { output: './src/1password-events/types.ts' },
  client: { output: './src/1password-events/client.ts', baseUrl: '/' },
  rpc: { output: './src/1password-events/rpc.ts', parseResponse: true },
  swr: { output: './src/1password-events/hooks/swr.ts' },
  'tanstack-query': { output: './src/1password-events/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/1password-events/hooks/preact-query.ts' },
  'solid-query': { output: './src/1password-events/hooks/solid-query.ts' },
  'vue-query': { output: './src/1password-events/hooks/vue-query.ts' },
  'svelte-query': { output: './src/1password-events/hooks/svelte-query.ts' },
  'angular-query': { output: './src/1password-events/hooks/angular-query.ts' },
  docs: {
    output: './src/1password-events/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
