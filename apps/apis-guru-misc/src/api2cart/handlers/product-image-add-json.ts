import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductImageAddJsonRoute } from '../routes'

export const postProductImageAddJsonRouteHandler: RouteHandler<
  typeof postProductImageAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
