import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/pi/2018-02-27/openapi.yaml',
  output: './src/pi/routes.ts',
  template: {},
  type: { output: './src/pi/types.ts' },
  client: { output: './src/pi/client.ts', baseUrl: '/' },
  rpc: { output: './src/pi/rpc.ts', parseResponse: true },
  swr: { output: './src/pi/hooks/swr.ts' },
  'tanstack-query': { output: './src/pi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pi/hooks/preact-query.ts' },
  'solid-query': { output: './src/pi/hooks/solid-query.ts' },
  'vue-query': { output: './src/pi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pi/hooks/angular-query.ts' },
  docs: {
    output: './src/pi/api.md',
    curl: true,
    baseUrl: 'https://pi.us-east-1.amazonaws.com',
  },
})
