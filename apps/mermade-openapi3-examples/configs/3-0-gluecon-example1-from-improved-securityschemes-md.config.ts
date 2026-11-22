import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/gluecon/example1_from_._Improved_securityschemes.md.yaml',
  output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/routes.ts',
  template: {},
  type: { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/types.ts' },
  client: { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-gluecon-example1-from-improved-securityschemes-md/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
