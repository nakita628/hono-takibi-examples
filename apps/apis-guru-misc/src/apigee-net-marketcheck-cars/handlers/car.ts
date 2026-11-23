import type { RouteHandler } from '@hono/zod-openapi'
import type { getCarDealerInventoryActiveRoute, getCarRecallVinRoute } from '../routes'

export const getCarDealerInventoryActiveRouteHandler: RouteHandler<
  typeof getCarDealerInventoryActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCarRecallVinRouteHandler: RouteHandler<typeof getCarRecallVinRoute> = async (c) => {
  throw new Error('Not implemented')
}
