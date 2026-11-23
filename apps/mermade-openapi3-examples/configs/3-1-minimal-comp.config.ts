import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Not generated: a 3.1 document with components but neither paths nor webhooks is rejected by
  // @apidevtools/swagger-parser ("not a valid Openapi API definition"). hono-takibi 0.30.0 to 0.31.0 read it
  // (nakita628/hono-takibi#417); 0.32.0 dropped that on purpose and defers to swagger-parser.
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/minimal_comp.yaml',
  output: './src/3-1-minimal-comp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-minimal-comp/types.ts' },
  client: { output: './src/3-1-minimal-comp/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-minimal-comp/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-minimal-comp/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-minimal-comp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-minimal-comp/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-minimal-comp/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-minimal-comp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-minimal-comp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-minimal-comp/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-minimal-comp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
