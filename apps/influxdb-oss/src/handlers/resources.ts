import type { RouteHandler } from '@hono/zod-openapi'
import type { getResourcesRoute } from '../routes'

export const getResourcesRouteHandler: RouteHandler<typeof getResourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}
