import type { RouteHandler } from '@hono/zod-openapi'
import type { postCategoryImageAddJsonRoute } from '../routes'

export const postCategoryImageAddJsonRouteHandler: RouteHandler<
  typeof postCategoryImageAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
