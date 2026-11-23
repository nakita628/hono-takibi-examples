import type { RouteHandler } from '@hono/zod-openapi'
import type { postCachekeyInvalidateRoute } from '../routes'

export const postCachekeyInvalidateRouteHandler: RouteHandler<
  typeof postCachekeyInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
