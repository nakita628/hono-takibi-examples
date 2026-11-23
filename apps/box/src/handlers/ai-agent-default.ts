import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiAgentDefaultRoute } from '../routes'

const app = new OpenAPIHono()

export const aiAgentDefaultHandler = app.openapi(getAiAgentDefaultRoute, (c) => {
  throw new Error('Not implemented')
})
