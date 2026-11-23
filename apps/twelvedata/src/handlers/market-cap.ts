import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarketCapRoute } from '../routes'

export const getMarketCapRouteHandler: RouteHandler<typeof getMarketCapRoute> = async (c) => {
  throw new Error('Not implemented')
}
