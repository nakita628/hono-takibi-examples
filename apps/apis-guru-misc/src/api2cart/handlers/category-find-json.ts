import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoryFindJsonRoute } from '../routes'

export const getCategoryFindJsonRouteHandler: RouteHandler<
  typeof getCategoryFindJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
