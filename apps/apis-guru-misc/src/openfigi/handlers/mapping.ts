import type { RouteHandler } from '@hono/zod-openapi'
import type { getMappingValuesKeyRoute, postMappingRoute } from '../routes'

export const postMappingRouteHandler: RouteHandler<typeof postMappingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMappingValuesKeyRouteHandler: RouteHandler<
  typeof getMappingValuesKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
