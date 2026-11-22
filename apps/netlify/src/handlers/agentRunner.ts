import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentRunnersAgentRunnerIdDiffRoute,
  getAgentRunnersAgentRunnerIdRoute,
  getAgentRunnersRoute,
  patchAgentRunnersAgentRunnerIdRoute,
  postAgentRunnersAgentRunnerIdArchiveRoute,
  postAgentRunnersAgentRunnerIdStopRoute,
  postAgentRunnersRoute,
  postSitesSiteIdAgentRunnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentRunnerHandler = app
  .openapi(getAgentRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdAgentRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentRunnersAgentRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentRunnersAgentRunnerIdRoute, (c) => {
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
