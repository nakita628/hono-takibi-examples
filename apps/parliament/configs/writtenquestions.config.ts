import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/writtenquestions/v1/openapi.yaml',
  output: './src/writtenquestions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/writtenquestions/types.ts' },
  client: { output: './src/writtenquestions/client.ts', baseUrl: '/' },
  rpc: { output: './src/writtenquestions/rpc.ts', parseResponse: true },
  swr: { output: './src/writtenquestions/hooks/swr.ts' },
  'tanstack-query': { output: './src/writtenquestions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/writtenquestions/hooks/preact-query.ts' },
  'solid-query': { output: './src/writtenquestions/hooks/solid-query.ts' },
  'vue-query': { output: './src/writtenquestions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/writtenquestions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/writtenquestions/hooks/angular-query.ts' },
  docs: {
    output: './src/writtenquestions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
