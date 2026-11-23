import type { RouteHandler } from '@hono/zod-openapi'
import type { getExchangeRateRoute } from '../routes'

export const getExchangeRateRouteHandler: RouteHandler<typeof getExchangeRateRoute> = async (c) => {
  throw new Error('Not implemented')
}
