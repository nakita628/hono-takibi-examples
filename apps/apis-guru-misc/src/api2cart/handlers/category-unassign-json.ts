import type { RouteHandler } from '@hono/zod-openapi'
import type { postCategoryUnassignJsonRoute } from '../routes'

export const postCategoryUnassignJsonRouteHandler: RouteHandler<
  typeof postCategoryUnassignJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
