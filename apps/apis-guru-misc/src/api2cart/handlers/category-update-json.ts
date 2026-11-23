import type { RouteHandler } from '@hono/zod-openapi'
import type { putCategoryUpdateJsonRoute } from '../routes'

export const putCategoryUpdateJsonRouteHandler: RouteHandler<
  typeof putCategoryUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
