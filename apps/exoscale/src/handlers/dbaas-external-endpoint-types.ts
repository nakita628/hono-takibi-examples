import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasExternalEndpointTypesRoute } from '../routes'

export const getDbaasExternalEndpointTypesRouteHandler: RouteHandler<
  typeof getDbaasExternalEndpointTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
