import type { RouteHandler } from '@hono/zod-openapi'
import type { postStockPricesRoute } from '../routes'

export const postStockPricesRouteHandler: RouteHandler<typeof postStockPricesRoute> = async (c) => {
  throw new Error('Not implemented')
}
