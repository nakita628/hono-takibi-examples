import { OpenAPIHono } from '@hono/zod-openapi'
import { getAgentGatewaysInstanceIdSpendLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const agentGatewaySpendLogsHandler = app.openapi(
  getAgentGatewaysInstanceIdSpendLogsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
