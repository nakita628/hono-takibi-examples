import type { RouteHandler } from '@hono/zod-openapi'
import type { getCryptocurrenciesRoute } from '../routes'

export const getCryptocurrenciesRouteHandler: RouteHandler<
  typeof getCryptocurrenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
