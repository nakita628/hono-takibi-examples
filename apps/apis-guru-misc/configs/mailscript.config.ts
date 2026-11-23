import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mailscript.com/0.4.0/openapi.yaml',
  output: './src/mailscript/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mailscript/types.ts' },
  client: { output: './src/mailscript/client.ts', baseUrl: '/' },
  rpc: { output: './src/mailscript/rpc.ts', parseResponse: true },
  swr: { output: './src/mailscript/hooks/swr.ts' },
  'tanstack-query': { output: './src/mailscript/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mailscript/hooks/preact-query.ts' },
  'solid-query': { output: './src/mailscript/hooks/solid-query.ts' },
  'vue-query': { output: './src/mailscript/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mailscript/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mailscript/hooks/angular-query.ts' },
  docs: {
    output: './src/mailscript/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
