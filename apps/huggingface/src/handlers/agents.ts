import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAgentHarnessesRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app.openapi(getApiAgentHarnessesRoute, (c) => {
  throw new Error('Not implemented')
})
