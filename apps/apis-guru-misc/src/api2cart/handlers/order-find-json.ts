import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderFindJsonRoute } from '../routes'

export const getOrderFindJsonRouteHandler: RouteHandler<typeof getOrderFindJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
