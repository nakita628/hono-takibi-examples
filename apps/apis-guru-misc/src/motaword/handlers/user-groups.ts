import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserGroupsRoute } from '../routes'

export const getUserGroupsRouteHandler: RouteHandler<typeof getUserGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}
