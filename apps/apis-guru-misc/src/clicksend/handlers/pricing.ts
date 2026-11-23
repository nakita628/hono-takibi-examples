import type { RouteHandler } from '@hono/zod-openapi'
import type { getPricingCountryCurrencyCurrencyRoute } from '../routes'

export const getPricingCountryCurrencyCurrencyRouteHandler: RouteHandler<
  typeof getPricingCountryCurrencyCurrencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
