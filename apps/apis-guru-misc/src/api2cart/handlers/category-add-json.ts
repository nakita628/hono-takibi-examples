import type { RouteHandler } from '@hono/zod-openapi'
import type { postCategoryAddJsonRoute } from '../routes'

export const postCategoryAddJsonRouteHandler: RouteHandler<
  typeof postCategoryAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
