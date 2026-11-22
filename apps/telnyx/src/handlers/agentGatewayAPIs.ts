import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdApisApiIdRoute,
  getAgentGatewaysInstanceIdApisRoute,
  patchAgentGatewaysInstanceIdApisApiIdRoute,
  postAgentGatewaysInstanceIdApisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayAPIsHandler = app
  .openapi(getAgentGatewaysInstanceIdApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentGatewaysInstanceIdApisApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
