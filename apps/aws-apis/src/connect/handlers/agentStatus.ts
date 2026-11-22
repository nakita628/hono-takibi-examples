import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentStatusInstanceIdAgentStatusIdRoute,
  getAgentStatusInstanceIdRoute,
  postAgentStatusInstanceIdAgentStatusIdRoute,
  putAgentStatusInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentStatusHandler = app
  .openapi(putAgentStatusInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentStatusInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentStatusInstanceIdAgentStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentStatusInstanceIdAgentStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
