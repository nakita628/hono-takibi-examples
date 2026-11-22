import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1AgentTelemetryRoute, postApiV1AgentTelemetryStandaloneRoute } from '../routes'

const app = new OpenAPIHono()

export const agentTelemetryHandler = app
  .openapi(postApiV1AgentTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AgentTelemetryStandaloneRoute, (c) => {
    throw new Error('Not implemented')
  })
