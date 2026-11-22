import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Same document as parse-response.config.ts. Only the RPC functions differ: these return the
  // ClientResponse as it is (parseResponse: false). rpc needs template and client, which are written
  // to the same files with the same content.
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/json/train-travel.json',
  output: './src/routes.ts',
  template: {},
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc/response.ts', parseResponse: false },
})
