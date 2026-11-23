import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetArrivalsAndDeparturesByCRSCRSRoute } from '../routes'

export const getGetArrivalsAndDeparturesByCRSCRSRouteHandler: RouteHandler<
  typeof getGetArrivalsAndDeparturesByCRSCRSRoute
> = async (c) => {
  throw new Error('Not implemented')
}
