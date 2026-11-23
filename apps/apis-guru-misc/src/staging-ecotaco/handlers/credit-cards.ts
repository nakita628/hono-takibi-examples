import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreditCardsIdRoute, getCreditCardsRoute } from '../routes'

export const getCreditCardsRouteHandler: RouteHandler<typeof getCreditCardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCreditCardsIdRouteHandler: RouteHandler<typeof getCreditCardsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
