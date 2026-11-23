import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetArrivalsByCRSCRSRoute } from '../routes'

export const getGetArrivalsByCRSCRSRouteHandler: RouteHandler<
  typeof getGetArrivalsByCRSCRSRoute
> = async (c) => {
  throw new Error('Not implemented')
}
