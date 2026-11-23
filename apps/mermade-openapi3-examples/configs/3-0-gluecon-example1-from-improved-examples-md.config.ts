import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example1_from_._Improved_examples.md.yaml',
  output: './src/3-0-gluecon-example1-from-improved-examples-md/routes.ts',
  template: {},
  type: { output: './src/3-0-gluecon-example1-from-improved-examples-md/types.ts' },
  client: { output: './src/3-0-gluecon-example1-from-improved-examples-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example1-from-improved-examples-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example1-from-improved-examples-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example1-from-improved-examples-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
