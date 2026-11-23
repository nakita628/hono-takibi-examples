import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example2_from_._Different_requestbody.md.yaml',
  output: './src/3-0-gluecon-example2-from-different-requestbody-md/routes.ts',
  template: {},
  type: { output: './src/3-0-gluecon-example2-from-different-requestbody-md/types.ts' },
  client: { output: './src/3-0-gluecon-example2-from-different-requestbody-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example2-from-different-requestbody-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example2-from-different-requestbody-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example2-from-different-requestbody-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
