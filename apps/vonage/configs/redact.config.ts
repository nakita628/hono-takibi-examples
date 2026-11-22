import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/redact/1.0.6/openapi.yaml',
  output: './src/redact/routes.ts',
  template: {},
  type: { output: './src/redact/types.ts' },
  client: { output: './src/redact/client.ts', baseUrl: '/' },
  rpc: { output: './src/redact/rpc.ts', parseResponse: true },
  swr: { output: './src/redact/hooks/swr.ts' },
  'tanstack-query': { output: './src/redact/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redact/hooks/preact-query.ts' },
  'solid-query': { output: './src/redact/hooks/solid-query.ts' },
  'vue-query': { output: './src/redact/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redact/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redact/hooks/angular-query.ts' },
  docs: {
    output: './src/redact/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
