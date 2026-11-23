import type { RouteHandler } from '@hono/zod-openapi'
import type { patchMappingOfSchemaNamesRoute } from '../routes'

export const patchMappingOfSchemaNamesRouteHandler: RouteHandler<
  typeof patchMappingOfSchemaNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
