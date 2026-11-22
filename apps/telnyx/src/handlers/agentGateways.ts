import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdRoute,
  getAgentGatewaysInstanceIdModelsRoute,
  getAgentGatewaysInstanceIdRoute,
  getAgentGatewaysRoute,
  postAgentGatewaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewaysHandler = app
  .openapi(getAgentGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentGatewaysInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentGatewaysInstanceIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
