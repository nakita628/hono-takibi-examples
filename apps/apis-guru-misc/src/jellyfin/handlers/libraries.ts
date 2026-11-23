import type { RouteHandler } from '@hono/zod-openapi'
import type { getLibrariesAvailableOptionsRoute } from '../routes'

export const getLibrariesAvailableOptionsRouteHandler: RouteHandler<
  typeof getLibrariesAvailableOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
