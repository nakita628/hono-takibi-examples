import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsBlueprintsAgentBlueprintIdRoute,
  deleteAgentsInstancesAgentInstanceIdRoute,
  getAgentsBlueprintsAgentBlueprintIdRoute,
  getAgentsBlueprintsRoute,
  getAgentsInstancesAgentInstanceIdRoute,
  getAgentsInstancesRoute,
  getAgentsRegistrationsIdRoute,
  getAgentsSessionsAgentInstanceSessionIdRoute,
  getAgentsSessionsRoute,
  patchAgentsBlueprintsAgentBlueprintIdRoute,
  patchAgentsClaimsAttemptsRoute,
  postAgentsBlueprintsAgentBlueprintIdTokensRoute,
  postAgentsBlueprintsAgentBlueprintIdTokensValidateRoute,
  postAgentsBlueprintsRoute,
  postAgentsCredentialsValidateRoute,
  postAgentsRegistrationsIdRevokeRoute,
  postAgentsSessionsAgentInstanceSessionIdRevokeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(postAgentsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsBlueprintsAgentBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentsBlueprintsAgentBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsBlueprintsAgentBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsBlueprintsAgentBlueprintIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsBlueprintsAgentBlueprintIdTokensValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentsClaimsAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsCredentialsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsInstancesAgentInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsInstancesAgentInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsRegistrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsRegistrationsIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSessionsAgentInstanceSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSessionsAgentInstanceSessionIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
