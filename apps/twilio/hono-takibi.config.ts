import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Twilio REST API (api.twilio.com, 2010-04-01): https://github.com/twilio/twilio-oai
  input: 'https://raw.githubusercontent.com/twilio/twilio-oai/main/spec/json/twilio_api_v2010.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.twilio.com',
  },
})
