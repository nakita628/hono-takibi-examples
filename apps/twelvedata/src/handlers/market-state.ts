import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarketStateRoute } from '../routes'

export const getMarketStateRouteHandler: RouteHandler<typeof getMarketStateRoute> = async (c) => {
  throw new Error('Not implemented')
}
