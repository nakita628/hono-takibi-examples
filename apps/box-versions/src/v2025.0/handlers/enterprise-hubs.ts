import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnterpriseHubsRoute } from '../routes'

const app = new OpenAPIHono()

export const enterpriseHubsHandler = app.openapi(getEnterpriseHubsRoute, (c) => {
  throw new Error('Not implemented')
})
