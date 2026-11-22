import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1IntegrationAdminTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationAdminTokenHandler = app.openapi(postV1IntegrationAdminTokenRoute, (c) => {
  throw new Error('Not implemented')
})
