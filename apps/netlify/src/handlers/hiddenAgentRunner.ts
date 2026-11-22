import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentRunnersAgentRunnerIdRoute,
  deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hiddenAgentRunnerHandler = app
  .openapi(deleteAgentRunnersAgentRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
