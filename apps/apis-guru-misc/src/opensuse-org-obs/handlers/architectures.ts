import type { RouteHandler } from '@hono/zod-openapi'
import type { getArchitecturesArchitectureNameRoute, getArchitecturesRoute } from '../routes'

export const getArchitecturesRouteHandler: RouteHandler<typeof getArchitecturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getArchitecturesArchitectureNameRouteHandler: RouteHandler<
  typeof getArchitecturesArchitectureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
