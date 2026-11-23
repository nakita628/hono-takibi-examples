import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example4_from_._Different_parameters.md.yaml',
  output: './src/3-0-gluecon-example4-from-different-parameters-md/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-gluecon-example4-from-different-parameters-md/types.ts' },
  client: { output: './src/3-0-gluecon-example4-from-different-parameters-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example4-from-different-parameters-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example4-from-different-parameters-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example4-from-different-parameters-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
