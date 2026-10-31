import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sms-voice/2018-09-05/openapi.yaml',
  output: './src/sms-voice/routes.ts',
  docs: {
    output: './src/sms-voice/api.md',
    curl: true,
    baseUrl: 'https://sms-voice.us-east-1.amazonaws.com',
  },
})
