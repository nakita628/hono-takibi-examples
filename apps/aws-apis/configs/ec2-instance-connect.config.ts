import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ec2-instance-connect/2018-04-02/openapi.yaml',
  output: './src/ec2-instance-connect/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ec2-instance-connect/types.ts' },
  client: { output: './src/ec2-instance-connect/client.ts', baseUrl: '/' },
  rpc: { output: './src/ec2-instance-connect/rpc.ts', parseResponse: true },
  swr: { output: './src/ec2-instance-connect/hooks/swr.ts' },
  'tanstack-query': { output: './src/ec2-instance-connect/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ec2-instance-connect/hooks/preact-query.ts' },
  'solid-query': { output: './src/ec2-instance-connect/hooks/solid-query.ts' },
  'vue-query': { output: './src/ec2-instance-connect/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ec2-instance-connect/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ec2-instance-connect/hooks/angular-query.ts' },
  docs: {
    output: './src/ec2-instance-connect/api.md',
    curl: true,
    baseUrl: 'https://ec2-instance-connect.us-east-1.amazonaws.com',
  },
})
