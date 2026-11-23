import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1AccountReportsSearchRoute, getV1DetailedLeadReportsSearchRoute } from '../routes'

export const getV1AccountReportsSearchRouteHandler: RouteHandler<
  typeof getV1AccountReportsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DetailedLeadReportsSearchRouteHandler: RouteHandler<
  typeof getV1DetailedLeadReportsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
