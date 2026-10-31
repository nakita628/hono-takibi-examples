import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/streams.dynamodb/2012-08-10/openapi.yaml',
  output: './src/streams-dynamodb/routes.ts',
  docs: {
    output: './src/streams-dynamodb/api.md',
    curl: true,
    baseUrl: 'https://streams-dynamodb.us-east-1.amazonaws.com',
  },
})
