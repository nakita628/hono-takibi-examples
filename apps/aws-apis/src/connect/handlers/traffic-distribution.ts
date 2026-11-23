import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrafficDistributionIdRoute, putTrafficDistributionIdRoute } from '../routes'

export const getTrafficDistributionIdRouteHandler: RouteHandler<
  typeof getTrafficDistributionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTrafficDistributionIdRouteHandler: RouteHandler<
  typeof putTrafficDistributionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
