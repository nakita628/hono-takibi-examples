import type { RouteHandler } from '@hono/zod-openapi'
import type { getVehicleSeenRoute } from '../routes'

export const getVehicleSeenRouteHandler: RouteHandler<typeof getVehicleSeenRoute> = async (c) => {
  throw new Error('Not implemented')
}
