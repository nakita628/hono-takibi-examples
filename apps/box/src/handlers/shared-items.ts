import type { RouteHandler } from '@hono/zod-openapi'
import type { getSharedItemsRoute } from '../routes'

export const getSharedItemsRouteHandler: RouteHandler<typeof getSharedItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}
