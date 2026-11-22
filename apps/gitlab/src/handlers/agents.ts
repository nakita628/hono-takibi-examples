import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4JobAllowedAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app.openapi(getApiV4JobAllowedAgentsRoute, (c) => {
  throw new Error('Not implemented')
})
