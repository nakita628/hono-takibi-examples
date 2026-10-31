import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api.gov.uk/vehicle-enquiry/1.1.0/openapi.yaml',
  output: './src/api-gov-uk-vehicle-enquiry/routes.ts',
  docs: {
    output: './src/api-gov-uk-vehicle-enquiry/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
