import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetFastestDeparturesByCRSCRSRoute } from '../routes'

export const getGetFastestDeparturesByCRSCRSRouteHandler: RouteHandler<
  typeof getGetFastestDeparturesByCRSCRSRoute
> = async (c) => {
  throw new Error('Not implemented')
}
