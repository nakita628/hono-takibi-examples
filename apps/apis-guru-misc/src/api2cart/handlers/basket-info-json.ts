import type { RouteHandler } from '@hono/zod-openapi'
import type { getBasketInfoJsonRoute } from '../routes'

export const getBasketInfoJsonRouteHandler: RouteHandler<typeof getBasketInfoJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
