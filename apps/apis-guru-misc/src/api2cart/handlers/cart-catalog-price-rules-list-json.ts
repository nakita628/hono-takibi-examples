import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartCatalogPriceRulesListJsonRoute } from '../routes'

export const getCartCatalogPriceRulesListJsonRouteHandler: RouteHandler<
  typeof getCartCatalogPriceRulesListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
