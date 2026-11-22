import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsInstancesAgentInstanceIdRoute,
  getAgentsInstancesAgentInstanceIdRoute,
  getAgentsInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsInstancesHandler = app
  .openapi(getAgentsInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsInstancesAgentInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsInstancesAgentInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
