import { OpenAPIHono } from '@hono/zod-openapi'
import { postIntegrationsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app.openapi(postIntegrationsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
