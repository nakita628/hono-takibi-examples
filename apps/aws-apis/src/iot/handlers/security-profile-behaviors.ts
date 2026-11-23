import type { RouteHandler } from '@hono/zod-openapi'
import type { postSecurityProfileBehaviorsValidateRoute } from '../routes'

export const postSecurityProfileBehaviorsValidateRouteHandler: RouteHandler<
  typeof postSecurityProfileBehaviorsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
