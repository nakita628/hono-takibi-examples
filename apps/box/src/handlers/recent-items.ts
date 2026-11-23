import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecentItemsRoute } from '../routes'

export const getRecentItemsRouteHandler: RouteHandler<typeof getRecentItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}
