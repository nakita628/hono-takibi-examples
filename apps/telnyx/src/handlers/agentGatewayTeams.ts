import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentGatewaysInstanceIdTeamsTeamIdRoute,
  getAgentGatewaysInstanceIdTeamsRoute,
  patchAgentGatewaysInstanceIdTeamsTeamIdRoute,
  postAgentGatewaysInstanceIdTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayTeamsHandler = app
  .openapi(getAgentGatewaysInstanceIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentGatewaysInstanceIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentGatewaysInstanceIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentGatewaysInstanceIdTeamsTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
