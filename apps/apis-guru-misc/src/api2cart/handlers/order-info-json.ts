import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderInfoJsonRoute } from '../routes'

export const getOrderInfoJsonRouteHandler: RouteHandler<typeof getOrderInfoJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
