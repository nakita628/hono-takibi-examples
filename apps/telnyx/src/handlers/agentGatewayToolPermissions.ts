import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute,
  getAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute,
  putAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute,
  putAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentGatewayToolPermissionsHandler = app
  .openapi(getAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentGatewaysInstanceIdKeysKeyIdToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentGatewaysInstanceIdTeamsTeamIdToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
