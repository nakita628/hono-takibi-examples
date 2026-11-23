import type { RouteHandler } from '@hono/zod-openapi'
import type { getGroupsCurrentRoute } from '../routes'

export const getGroupsCurrentRouteHandler: RouteHandler<typeof getGroupsCurrentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
