import type { RouteHandler } from '@hono/zod-openapi'
import type { putCategoriesIdJsonRoute } from '../routes'

export const putCategoriesIdJsonRouteHandler: RouteHandler<
  typeof putCategoriesIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
