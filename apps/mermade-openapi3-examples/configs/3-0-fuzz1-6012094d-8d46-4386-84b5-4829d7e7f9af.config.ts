import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/6012094d-8d46-4386-84b5-4829d7e7f9af.yaml',
  output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/types.ts' },
  client: { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-6012094d-8d46-4386-84b5-4829d7e7f9af/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
