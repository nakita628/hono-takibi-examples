import type { RouteHandler } from '@hono/zod-openapi'
import type { getVehicleHistoryRoute } from '../routes'

export const getVehicleHistoryRouteHandler: RouteHandler<typeof getVehicleHistoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
