import type { RouteHandler } from '@hono/zod-openapi'
import type { getCommercialCreditCardsRoute, headCommercialCreditCardsRoute } from '../routes'

export const getCommercialCreditCardsRouteHandler: RouteHandler<
  typeof getCommercialCreditCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headCommercialCreditCardsRouteHandler: RouteHandler<
  typeof headCommercialCreditCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
