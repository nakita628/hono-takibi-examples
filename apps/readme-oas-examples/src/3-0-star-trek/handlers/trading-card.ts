import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTradingCardRoute,
  getTradingCardSearchRoute,
  postTradingCardSearchRoute,
} from '../routes'

export const getTradingCardRouteHandler: RouteHandler<typeof getTradingCardRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTradingCardSearchRouteHandler: RouteHandler<
  typeof getTradingCardSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTradingCardSearchRouteHandler: RouteHandler<
  typeof postTradingCardSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
