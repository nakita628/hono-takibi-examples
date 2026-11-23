import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example2_from_._New_callbacks.md.yaml',
  output: './src/3-0-gluecon-example2-from-new-callbacks-md/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-gluecon-example2-from-new-callbacks-md/types.ts' },
  client: { output: './src/3-0-gluecon-example2-from-new-callbacks-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example2-from-new-callbacks-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example2-from-new-callbacks-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example2-from-new-callbacks-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
