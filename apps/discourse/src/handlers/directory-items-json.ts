import type { RouteHandler } from '@hono/zod-openapi'
import type { getDirectoryItemsJsonRoute } from '../routes'

export const getDirectoryItemsJsonRouteHandler: RouteHandler<
  typeof getDirectoryItemsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
