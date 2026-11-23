import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssignmentAccountsXAmzSsoBearerTokenRoute,
  getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute,
  getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRoute,
  postLogoutXAmzSsoBearerTokenRoute,
} from './routes'
import {
  getAssignmentAccountsXAmzSsoBearerTokenRouteHandler,
  getAssignmentRolesXAmzSsoBearerTokenAccountIdRouteHandler,
  getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRouteHandler,
  postLogoutXAmzSsoBearerTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRoute,
    getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRouteHandler,
  )
  .openapi(
    getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute,
    getAssignmentRolesXAmzSsoBearerTokenAccountIdRouteHandler,
  )
  .openapi(
    getAssignmentAccountsXAmzSsoBearerTokenRoute,
    getAssignmentAccountsXAmzSsoBearerTokenRouteHandler,
  )
  .openapi(postLogoutXAmzSsoBearerTokenRoute, postLogoutXAmzSsoBearerTokenRouteHandler)

export default app
