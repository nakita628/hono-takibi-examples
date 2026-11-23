import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSpotMarketRequestsIdRoute, getSpotMarketRequestsIdRoute } from '../routes'

export const deleteSpotMarketRequestsIdRouteHandler: RouteHandler<
  typeof deleteSpotMarketRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpotMarketRequestsIdRouteHandler: RouteHandler<
  typeof getSpotMarketRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
