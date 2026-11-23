import type { RouteHandler } from '@hono/zod-openapi'
import type { getSharedRegionsRoute } from '../routes'

export const getSharedRegionsRouteHandler: RouteHandler<typeof getSharedRegionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
