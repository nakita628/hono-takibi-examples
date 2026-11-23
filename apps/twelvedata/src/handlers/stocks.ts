import type { RouteHandler } from '@hono/zod-openapi'
import type { getStocksRoute } from '../routes'

export const getStocksRouteHandler: RouteHandler<typeof getStocksRoute> = async (c) => {
  throw new Error('Not implemented')
}
