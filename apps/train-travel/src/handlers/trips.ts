import type { RouteHandler } from '@hono/zod-openapi'
import type { getTripsRoute } from '../routes'

export const getTripsRouteHandler: RouteHandler<typeof getTripsRoute> = async (c) => {
  throw new Error('Not implemented')
}
