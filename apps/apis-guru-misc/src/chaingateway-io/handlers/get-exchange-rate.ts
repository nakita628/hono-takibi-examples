import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetExchangeRateRoute } from '../routes'

export const postGetExchangeRateRouteHandler: RouteHandler<
  typeof postGetExchangeRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
