import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigV1AgentsRoute,
  getConfigV1RumAgentsRoute,
  postConfigV1AgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentConfigHandler = app
  .openapi(getConfigV1AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigV1AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigV1RumAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
