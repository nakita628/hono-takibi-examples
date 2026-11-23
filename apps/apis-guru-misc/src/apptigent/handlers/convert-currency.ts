import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertCurrencyRoute } from '../routes'

export const postConvertCurrencyRouteHandler: RouteHandler<
  typeof postConvertCurrencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
