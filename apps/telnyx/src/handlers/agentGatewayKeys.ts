import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdKeysKeyIdRoute,
  getAgentGatewaysInstanceIdKeysRoute,
  patchAgentGatewaysInstanceIdKeysKeyIdRoute,
  postAgentGatewaysInstanceIdKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayKeysHandler = app
  .openapi(getAgentGatewaysInstanceIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentGatewaysInstanceIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
