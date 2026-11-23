import type { RouteHandler } from '@hono/zod-openapi'
import type { getGroupsJsonRoute } from '../routes'

export const getGroupsJsonRouteHandler: RouteHandler<typeof getGroupsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
