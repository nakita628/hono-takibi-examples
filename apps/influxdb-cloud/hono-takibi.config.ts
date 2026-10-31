import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/influxdata/openapi/master/contracts/cloud.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://us-east-1-1.aws.cloud2.influxdata.com',
  },
})
