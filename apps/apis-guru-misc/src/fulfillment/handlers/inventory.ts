import type { RouteHandler } from '@hono/zod-openapi'
import type { getInventoryRoute } from '../routes'

export const getInventoryRouteHandler: RouteHandler<typeof getInventoryRoute> = async (c) => {
  throw new Error('Not implemented')
}
