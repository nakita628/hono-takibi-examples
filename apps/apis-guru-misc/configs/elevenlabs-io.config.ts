import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/elevenlabs.io/1.0/openapi.yaml',
  output: './src/elevenlabs-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/elevenlabs-io/types.ts' },
  client: { output: './src/elevenlabs-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/elevenlabs-io/rpc.ts', parseResponse: true },
  swr: { output: './src/elevenlabs-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/elevenlabs-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elevenlabs-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/elevenlabs-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/elevenlabs-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elevenlabs-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elevenlabs-io/hooks/angular-query.ts' },
  docs: {
    output: './src/elevenlabs-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
