import type { RouteHandler } from '@hono/zod-openapi'
import type { getMarketdataExchangeComponentsRoute, getMarketdataSnapshotRoute } from '../routes'

export const getMarketdataExchangeComponentsRouteHandler: RouteHandler<
  typeof getMarketdataExchangeComponentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMarketdataSnapshotRouteHandler: RouteHandler<
  typeof getMarketdataSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
