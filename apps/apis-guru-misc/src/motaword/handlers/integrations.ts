import { OpenAPIHono } from '@hono/zod-openapi'
import { getIntegrationsTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app.openapi(getIntegrationsTokenRoute, (c) => {
  throw new Error('Not implemented')
})
