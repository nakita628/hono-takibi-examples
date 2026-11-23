import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ec2/2016-11-15/openapi.yaml',
  output: './src/ec2/routes.ts',
  template: {},
  type: { output: './src/ec2/types.ts' },
  client: { output: './src/ec2/client.ts', baseUrl: '/' },
  rpc: { output: './src/ec2/rpc.ts', parseResponse: true },
  swr: { output: './src/ec2/hooks/swr.ts' },
  'tanstack-query': { output: './src/ec2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ec2/hooks/preact-query.ts' },
  'solid-query': { output: './src/ec2/hooks/solid-query.ts' },
  'vue-query': { output: './src/ec2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ec2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ec2/hooks/angular-query.ts' },
  docs: {
    output: './src/ec2/api.md',
    curl: true,
    baseUrl: 'https://ec2.us-east-1.amazonaws.com',
  },
})
