import type { RouteHandler } from '@hono/zod-openapi'
import type { patchMappingWithDuplicateSchemasRoute } from '../routes'

export const patchMappingWithDuplicateSchemasRouteHandler: RouteHandler<
  typeof patchMappingWithDuplicateSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}
