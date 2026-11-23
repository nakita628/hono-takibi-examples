import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssignmentAccountsXAmzSsoBearerTokenRoute,
  getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute,
} from '../routes'

export const getAssignmentRolesXAmzSsoBearerTokenAccountIdRouteHandler: RouteHandler<
  typeof getAssignmentRolesXAmzSsoBearerTokenAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssignmentAccountsXAmzSsoBearerTokenRouteHandler: RouteHandler<
  typeof getAssignmentAccountsXAmzSsoBearerTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
