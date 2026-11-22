import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConvaiAgentsAgentIdTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const agentsInsightsHandler = app.openapi(getV1ConvaiAgentsAgentIdTopicsRoute, (c) => {
  throw new Error('Not implemented')
})
