import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdMcpServersServerIdRoute,
  getAgentGatewaysInstanceIdMcpServersRoute,
  patchAgentGatewaysInstanceIdMcpServersServerIdRoute,
  postAgentGatewaysInstanceIdMcpServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayMCPServersHandler = app
  .openapi(getAgentGatewaysInstanceIdMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdMcpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdMcpServersServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentGatewaysInstanceIdMcpServersServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
