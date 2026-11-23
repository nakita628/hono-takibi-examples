import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/oralquestions/v1/openapi.yaml',
  output: './src/oralquestions/routes.ts',
  template: {},
  type: { output: './src/oralquestions/types.ts' },
  client: { output: './src/oralquestions/client.ts', baseUrl: '/' },
  rpc: { output: './src/oralquestions/rpc.ts', parseResponse: true },
  swr: { output: './src/oralquestions/hooks/swr.ts' },
  'tanstack-query': { output: './src/oralquestions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/oralquestions/hooks/preact-query.ts' },
  'solid-query': { output: './src/oralquestions/hooks/solid-query.ts' },
  'vue-query': { output: './src/oralquestions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/oralquestions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/oralquestions/hooks/angular-query.ts' },
  docs: {
    output: './src/oralquestions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
