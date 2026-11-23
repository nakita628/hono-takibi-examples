import type { RouteHandler } from '@hono/zod-openapi'
import type { getSatelliteRoute, getSatelliteSatelliteIdRoute } from '../routes'

export const getSatelliteSatelliteIdRouteHandler: RouteHandler<
  typeof getSatelliteSatelliteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSatelliteRouteHandler: RouteHandler<typeof getSatelliteRoute> = async (c) => {
  throw new Error('Not implemented')
}
