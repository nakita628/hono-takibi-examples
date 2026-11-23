import type { RouteHandler } from '@hono/zod-openapi'
import type { patchDiscriminatorWithNoMappingRoute } from '../routes'

export const patchDiscriminatorWithNoMappingRouteHandler: RouteHandler<
  typeof patchDiscriminatorWithNoMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
