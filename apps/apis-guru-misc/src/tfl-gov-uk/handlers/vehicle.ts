import type { RouteHandler } from '@hono/zod-openapi'
import type { getVehicleIdsArrivalsRoute } from '../routes'

export const getVehicleIdsArrivalsRouteHandler: RouteHandler<
  typeof getVehicleIdsArrivalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
