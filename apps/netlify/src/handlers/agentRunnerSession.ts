import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  getAgentRunnersAgentRunnerIdSessionsRoute,
  patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute,
  postAgentRunnersAgentRunnerIdSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentRunnerSessionHandler = app
  .openapi(getAgentRunnersAgentRunnerIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
