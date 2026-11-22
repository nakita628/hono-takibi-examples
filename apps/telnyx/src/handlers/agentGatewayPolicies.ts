import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdPoliciesNameRoute,
  getAgentGatewaysInstanceIdPoliciesNameRoute,
  getAgentGatewaysInstanceIdPoliciesRoute,
  patchAgentGatewaysInstanceIdPoliciesNameRoute,
  postAgentGatewaysInstanceIdPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayPoliciesHandler = app
  .openapi(getAgentGatewaysInstanceIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdPoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentGatewaysInstanceIdPoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentGatewaysInstanceIdPoliciesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
