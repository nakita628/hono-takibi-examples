import { OpenAPIHono } from '@hono/zod-openapi'
import { postIntegrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app.openapi(postIntegrationsRoute, (c) => {
  throw new Error('Not implemented')
})
