import type { RouteHandler } from '@hono/zod-openapi'
import type { getShuttleMappingErrorsRoute } from '../routes'

export const getShuttleMappingErrorsRouteHandler: RouteHandler<
  typeof getShuttleMappingErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
