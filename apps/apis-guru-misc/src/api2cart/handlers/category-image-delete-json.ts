import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCategoryImageDeleteJsonRoute } from '../routes'

export const deleteCategoryImageDeleteJsonRouteHandler: RouteHandler<
  typeof deleteCategoryImageDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
