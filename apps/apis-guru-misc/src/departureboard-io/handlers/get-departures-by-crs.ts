import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetDeparturesByCRSCRSRoute } from '../routes'

export const getGetDeparturesByCRSCRSRouteHandler: RouteHandler<
  typeof getGetDeparturesByCRSCRSRoute
> = async (c) => {
  throw new Error('Not implemented')
}
