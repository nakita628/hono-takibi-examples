import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSavingsPlanRatesRoute } from '../routes'

export const postDescribeSavingsPlanRatesRouteHandler: RouteHandler<
  typeof postDescribeSavingsPlanRatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
