import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1IntegrationCustomerTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationCustomerTokenHandler = app.openapi(
  postV1IntegrationCustomerTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
