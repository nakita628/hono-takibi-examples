import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fiendish/ref-encoding3.yaml',
  output: './src/3-0-fiendish-ref-encoding3/routes.ts',
  template: {},
  type: { output: './src/3-0-fiendish-ref-encoding3/types.ts' },
  client: { output: './src/3-0-fiendish-ref-encoding3/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fiendish-ref-encoding3/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fiendish-ref-encoding3/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fiendish-ref-encoding3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fiendish-ref-encoding3/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fiendish-ref-encoding3/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fiendish-ref-encoding3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fiendish-ref-encoding3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fiendish-ref-encoding3/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fiendish-ref-encoding3/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
