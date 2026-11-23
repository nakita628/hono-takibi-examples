import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/nonBearerHttpSec.yaml',
  output: './src/3-0-nonbearerhttpsec/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-nonbearerhttpsec/types.ts' },
  client: { output: './src/3-0-nonbearerhttpsec/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-nonbearerhttpsec/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-nonbearerhttpsec/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-nonbearerhttpsec/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-nonbearerhttpsec/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-nonbearerhttpsec/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-nonbearerhttpsec/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-nonbearerhttpsec/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-nonbearerhttpsec/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-nonbearerhttpsec/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
