import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupportedResourceTypesRoute } from '../routes'

export const getSupportedResourceTypesRouteHandler: RouteHandler<
  typeof getSupportedResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
