import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartCatalogPriceRulesCountJsonRoute } from '../routes'

export const getCartCatalogPriceRulesCountJsonRouteHandler: RouteHandler<
  typeof getCartCatalogPriceRulesCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
