import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example1_from_._Improved_pathdescriptions.md.yaml',
  output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/routes.ts',
  template: {},
  type: { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/types.ts' },
  client: { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example1-from-improved-pathdescriptions-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
