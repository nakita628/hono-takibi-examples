import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAcceptReservedNodeExchangeRoute,
  postActionAcceptReservedNodeExchangeRoute,
} from '../routes'

export const getActionAcceptReservedNodeExchangeRouteHandler: RouteHandler<
  typeof getActionAcceptReservedNodeExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAcceptReservedNodeExchangeRouteHandler: RouteHandler<
  typeof postActionAcceptReservedNodeExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
