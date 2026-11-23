import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTradingCardSetRoute,
  getTradingCardSetSearchRoute,
  postTradingCardSetSearchRoute,
} from '../routes'

export const getTradingCardSetRouteHandler: RouteHandler<typeof getTradingCardSetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTradingCardSetSearchRouteHandler: RouteHandler<
  typeof getTradingCardSetSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTradingCardSetSearchRouteHandler: RouteHandler<
  typeof postTradingCardSetSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
