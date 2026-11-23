import type { RouteHandler } from '@hono/zod-openapi'
import type { getV3TaxRatesRoute } from '../routes'

export const getV3TaxRatesRouteHandler: RouteHandler<typeof getV3TaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
