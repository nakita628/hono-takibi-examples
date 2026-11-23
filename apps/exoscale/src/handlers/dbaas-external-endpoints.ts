import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasExternalEndpointsRoute } from '../routes'

export const getDbaasExternalEndpointsRouteHandler: RouteHandler<
  typeof getDbaasExternalEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
