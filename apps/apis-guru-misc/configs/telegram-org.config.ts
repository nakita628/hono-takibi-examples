import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/telegram.org/5.0.0/openapi.yaml',
  output: './src/telegram-org/routes.ts',
  template: {},
  type: { output: './src/telegram-org/types.ts' },
  client: { output: './src/telegram-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/telegram-org/rpc.ts', parseResponse: true },
  swr: { output: './src/telegram-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/telegram-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/telegram-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/telegram-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/telegram-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/telegram-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/telegram-org/hooks/angular-query.ts' },
  docs: {
    output: './src/telegram-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
