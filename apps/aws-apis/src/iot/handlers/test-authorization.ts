import type { RouteHandler } from '@hono/zod-openapi'
import type { postTestAuthorizationRoute } from '../routes'

export const postTestAuthorizationRouteHandler: RouteHandler<
  typeof postTestAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
