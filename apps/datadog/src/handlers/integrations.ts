import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2IntegrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app.openapi(getApiV2IntegrationsRoute, (c) => {
  throw new Error('Not implemented')
})
