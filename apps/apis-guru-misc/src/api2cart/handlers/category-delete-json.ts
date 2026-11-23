import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCategoryDeleteJsonRoute } from '../routes'

export const deleteCategoryDeleteJsonRouteHandler: RouteHandler<
  typeof deleteCategoryDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
