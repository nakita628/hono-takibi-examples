import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/firstinspires.org/1.0.0/openapi.yaml',
  output: './src/firstinspires-org/routes.ts',
  template: {},
  type: { output: './src/firstinspires-org/types.ts' },
  client: { output: './src/firstinspires-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/firstinspires-org/rpc.ts', parseResponse: true },
  swr: { output: './src/firstinspires-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/firstinspires-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firstinspires-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/firstinspires-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/firstinspires-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firstinspires-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firstinspires-org/hooks/angular-query.ts' },
  docs: {
    output: './src/firstinspires-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
