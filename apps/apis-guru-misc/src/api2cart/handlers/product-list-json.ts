import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductListJsonRoute } from '../routes'

export const getProductListJsonRouteHandler: RouteHandler<typeof getProductListJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
