import type { RouteHandler } from '@hono/zod-openapi'
import type { postLogoutXAmzSsoBearerTokenRoute } from '../routes'

export const postLogoutXAmzSsoBearerTokenRouteHandler: RouteHandler<
  typeof postLogoutXAmzSsoBearerTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
