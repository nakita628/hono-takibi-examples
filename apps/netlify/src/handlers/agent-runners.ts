import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentRunnersAgentRunnerIdRoute,
  deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  getAgentRunnersAgentRunnerIdDiffRoute,
  getAgentRunnersAgentRunnerIdRoute,
  getAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  getAgentRunnersAgentRunnerIdSessionsRoute,
  getAgentRunnersRoute,
  patchAgentRunnersAgentRunnerIdRoute,
  patchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute,
  postAgentRunnersAgentRunnerIdArchiveRoute,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute,
  postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute,
  postAgentRunnersAgentRunnerIdSessionsRoute,
  postAgentRunnersAgentRunnerIdStopRoute,
  postAgentRunnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentRunnersHandler = app
  .openapi(getAgentRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunnersAgentRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentRunnersAgentRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentRunnersAgentRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunnersAgentRunnerIdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(deleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
