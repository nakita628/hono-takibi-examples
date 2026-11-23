import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasServiceTypeRoute, getDbaasServiceTypeServiceTypeNameRoute } from '../routes'

export const getDbaasServiceTypeRouteHandler: RouteHandler<
  typeof getDbaasServiceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDbaasServiceTypeServiceTypeNameRouteHandler: RouteHandler<
  typeof getDbaasServiceTypeServiceTypeNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
