import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute,
  getAgentGatewaysInstanceIdGuardrailsRoute,
  patchAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute,
  postAgentGatewaysInstanceIdGuardrailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayGuardrailsHandler = app
  .openapi(getAgentGatewaysInstanceIdGuardrailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdGuardrailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentGatewaysInstanceIdGuardrailsGuardrailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
