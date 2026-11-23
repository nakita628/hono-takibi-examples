import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotwireless/2020-11-22/openapi.yaml',
  output: './src/iotwireless/routes.ts',
  template: {},
  type: { output: './src/iotwireless/types.ts' },
  client: { output: './src/iotwireless/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotwireless/rpc.ts', parseResponse: true },
  swr: { output: './src/iotwireless/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotwireless/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotwireless/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotwireless/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotwireless/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotwireless/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotwireless/hooks/angular-query.ts' },
  docs: {
    output: './src/iotwireless/api.md',
    curl: true,
    baseUrl: 'https://iotwireless.us-east-1.amazonaws.com',
  },
})
