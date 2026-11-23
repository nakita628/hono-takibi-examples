import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bajajallianzlife/3.0.0/openapi.yaml',
  output: './src/bajajallianzlife/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bajajallianzlife/types.ts' },
  client: { output: './src/bajajallianzlife/client.ts', baseUrl: '/' },
  rpc: { output: './src/bajajallianzlife/rpc.ts', parseResponse: true },
  swr: { output: './src/bajajallianzlife/hooks/swr.ts' },
  'tanstack-query': { output: './src/bajajallianzlife/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bajajallianzlife/hooks/preact-query.ts' },
  'solid-query': { output: './src/bajajallianzlife/hooks/solid-query.ts' },
  'vue-query': { output: './src/bajajallianzlife/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bajajallianzlife/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bajajallianzlife/hooks/angular-query.ts' },
  docs: {
    output: './src/bajajallianzlife/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
