import type { RouteHandler } from '@hono/zod-openapi'
import type { getGroupsRoute } from '../routes'

export const getGroupsRouteHandler: RouteHandler<typeof getGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}
