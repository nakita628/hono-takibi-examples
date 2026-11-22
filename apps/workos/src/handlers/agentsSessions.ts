import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentsSessionsAgentInstanceSessionIdRoute,
  getAgentsSessionsRoute,
  postAgentsSessionsAgentInstanceSessionIdRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsSessionsHandler = app
  .openapi(getAgentsSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsAgentInstanceSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSessionsAgentInstanceSessionIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
