import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/sainikwelfarepud/3.0.0/openapi.yaml',
  output: './src/sainikwelfarepud/routes.ts',
  template: {},
  type: { output: './src/sainikwelfarepud/types.ts' },
  client: { output: './src/sainikwelfarepud/client.ts', baseUrl: '/' },
  rpc: { output: './src/sainikwelfarepud/rpc.ts', parseResponse: true },
  swr: { output: './src/sainikwelfarepud/hooks/swr.ts' },
  'tanstack-query': { output: './src/sainikwelfarepud/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sainikwelfarepud/hooks/preact-query.ts' },
  'solid-query': { output: './src/sainikwelfarepud/hooks/solid-query.ts' },
  'vue-query': { output: './src/sainikwelfarepud/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sainikwelfarepud/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sainikwelfarepud/hooks/angular-query.ts' },
  docs: {
    output: './src/sainikwelfarepud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
