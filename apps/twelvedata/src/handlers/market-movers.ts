import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarketMoversMarketRoute } from '../routes'

export const getMarketMoversMarketRouteHandler: RouteHandler<
  typeof getMarketMoversMarketRoute
> = async (c) => {
  throw new Error('Not implemented')
}
