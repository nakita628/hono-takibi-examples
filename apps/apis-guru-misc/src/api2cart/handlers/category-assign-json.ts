import type { RouteHandler } from '@hono/zod-openapi'
import type { postCategoryAssignJsonRoute } from '../routes'

export const postCategoryAssignJsonRouteHandler: RouteHandler<
  typeof postCategoryAssignJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
