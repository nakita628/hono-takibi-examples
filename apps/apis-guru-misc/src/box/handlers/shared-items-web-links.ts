import type { RouteHandler } from '@hono/zod-openapi'
import type { getSharedItemsWebLinksRoute } from '../routes'

export const getSharedItemsWebLinksRouteHandler: RouteHandler<
  typeof getSharedItemsWebLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
