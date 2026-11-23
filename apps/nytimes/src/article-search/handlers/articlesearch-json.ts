import type { RouteHandler } from '@hono/zod-openapi'
import type { getArticlesearchJsonRoute } from '../routes'

export const getArticlesearchJsonRouteHandler: RouteHandler<
  typeof getArticlesearchJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
