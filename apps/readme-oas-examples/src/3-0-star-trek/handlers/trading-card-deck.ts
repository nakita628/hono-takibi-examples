import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTradingCardDeckRoute,
  getTradingCardDeckSearchRoute,
  postTradingCardDeckSearchRoute,
} from '../routes'

export const getTradingCardDeckRouteHandler: RouteHandler<typeof getTradingCardDeckRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTradingCardDeckSearchRouteHandler: RouteHandler<
  typeof getTradingCardDeckSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTradingCardDeckSearchRouteHandler: RouteHandler<
  typeof postTradingCardDeckSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
