import type { RouteHandler } from '@hono/zod-openapi'
import type { patchDiscriminatorWithMappingRoute } from '../routes'

export const patchDiscriminatorWithMappingRouteHandler: RouteHandler<
  typeof patchDiscriminatorWithMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
