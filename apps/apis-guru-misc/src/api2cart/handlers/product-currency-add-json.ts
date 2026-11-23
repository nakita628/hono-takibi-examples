import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductCurrencyAddJsonRoute } from '../routes'

export const postProductCurrencyAddJsonRouteHandler: RouteHandler<
  typeof postProductCurrencyAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
