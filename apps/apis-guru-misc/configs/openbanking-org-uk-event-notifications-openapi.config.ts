import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/event-notifications-openapi/3.1.7/openapi.yaml',
  output: './src/openbanking-org-uk-event-notifications-openapi/routes.ts',
  docs: {
    output: './src/openbanking-org-uk-event-notifications-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
