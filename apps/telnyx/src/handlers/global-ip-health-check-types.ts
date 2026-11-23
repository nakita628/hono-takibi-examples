import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalIpHealthCheckTypesRoute } from '../routes'

export const getGlobalIpHealthCheckTypesRouteHandler: RouteHandler<
  typeof getGlobalIpHealthCheckTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
