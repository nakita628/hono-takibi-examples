import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetNextDeparturesByCRSCRSRoute } from '../routes'

export const getGetNextDeparturesByCRSCRSRouteHandler: RouteHandler<
  typeof getGetNextDeparturesByCRSCRSRoute
> = async (c) => {
  throw new Error('Not implemented')
}
