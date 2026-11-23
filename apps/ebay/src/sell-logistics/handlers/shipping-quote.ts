import type { RouteHandler } from '@hono/zod-openapi'
import type { getShippingQuoteShippingQuoteIdRoute, postShippingQuoteRoute } from '../routes'

export const postShippingQuoteRouteHandler: RouteHandler<typeof postShippingQuoteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShippingQuoteShippingQuoteIdRouteHandler: RouteHandler<
  typeof getShippingQuoteShippingQuoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
