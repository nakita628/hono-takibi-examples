import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteDbaasServiceNameRoute, getDbaasServiceRoute } from '../routes'

export const getDbaasServiceRouteHandler: RouteHandler<typeof getDbaasServiceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDbaasServiceNameRouteHandler: RouteHandler<
  typeof deleteDbaasServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
