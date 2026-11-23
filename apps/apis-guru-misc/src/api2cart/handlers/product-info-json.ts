import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductInfoJsonRoute } from '../routes'

export const getProductInfoJsonRouteHandler: RouteHandler<typeof getProductInfoJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
