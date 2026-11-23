import type { RouteHandler } from '@hono/zod-openapi'
import type { getCryptocurrencyExchangesRoute } from '../routes'

export const getCryptocurrencyExchangesRouteHandler: RouteHandler<
  typeof getCryptocurrencyExchangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
