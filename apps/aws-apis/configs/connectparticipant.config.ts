import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/connectparticipant/2018-09-07/openapi.yaml',
  output: './src/connectparticipant/routes.ts',
  docs: {
    output: './src/connectparticipant/api.md',
    curl: true,
    baseUrl: 'https://connectparticipant.us-east-1.amazonaws.com',
  },
})
