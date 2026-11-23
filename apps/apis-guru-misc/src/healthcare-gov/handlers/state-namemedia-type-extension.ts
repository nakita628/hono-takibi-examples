import type { RouteHandler } from '@hono/zod-openapi'
import type { getStateNameMediaTypeExtensionRoute } from '../routes'

export const getStateNameMediaTypeExtensionRouteHandler: RouteHandler<
  typeof getStateNameMediaTypeExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
