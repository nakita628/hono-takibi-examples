import type { RouteHandler } from '@hono/zod-openapi'
import type { getCurrencyConversionRoute } from '../routes'

export const getCurrencyConversionRouteHandler: RouteHandler<
  typeof getCurrencyConversionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
