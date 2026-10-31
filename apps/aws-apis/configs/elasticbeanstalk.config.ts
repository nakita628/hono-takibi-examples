import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticbeanstalk/2010-12-01/openapi.yaml',
  output: './src/elasticbeanstalk/routes.ts',
  docs: {
    output: './src/elasticbeanstalk/api.md',
    curl: true,
    baseUrl: 'https://elasticbeanstalk.us-east-1.amazonaws.com',
  },
})
