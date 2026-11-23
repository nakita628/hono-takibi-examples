import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1FlightsComputeFlightEmissionsRoute } from '../routes'

export const postV1FlightsComputeFlightEmissionsRouteHandler: RouteHandler<
  typeof postV1FlightsComputeFlightEmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
