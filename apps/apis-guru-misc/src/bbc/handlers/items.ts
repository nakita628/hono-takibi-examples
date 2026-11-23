import type { RouteHandler } from '@hono/zod-openapi'
import type { getItemsRoute } from '../routes'

export const getItemsRouteHandler: RouteHandler<typeof getItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}
