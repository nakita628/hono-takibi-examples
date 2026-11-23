import type { RouteHandler } from '@hono/zod-openapi'
import type { postShuttlePathMappingImportsRoute } from '../routes'

export const postShuttlePathMappingImportsRouteHandler: RouteHandler<
  typeof postShuttlePathMappingImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
