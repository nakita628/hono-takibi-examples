import type { RouteHandler } from '@hono/zod-openapi'
import type { getResourcesJsonRoute } from '../routes'

export const getResourcesJsonRouteHandler: RouteHandler<typeof getResourcesJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
