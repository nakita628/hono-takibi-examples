import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductCurrencyListJsonRoute } from '../routes'

export const getProductCurrencyListJsonRouteHandler: RouteHandler<
  typeof getProductCurrencyListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
