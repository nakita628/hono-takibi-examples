import type { RouteHandler } from '@hono/zod-openapi'
import type { getSharedItemsAppItemsRoute } from '../routes'

export const getSharedItemsAppItemsRouteHandler: RouteHandler<
  typeof getSharedItemsAppItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
