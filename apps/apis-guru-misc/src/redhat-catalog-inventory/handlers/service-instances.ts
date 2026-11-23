import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceInstancesIdRoute, getServiceInstancesRoute } from '../routes'

export const getServiceInstancesRouteHandler: RouteHandler<
  typeof getServiceInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceInstancesIdRouteHandler: RouteHandler<
  typeof getServiceInstancesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
