import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example1_from_._Improved_serverseverywhere.md.yaml',
  output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/routes.ts',
  template: {},
  type: { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/types.ts' },
  client: { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example1-from-improved-serverseverywhere-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
