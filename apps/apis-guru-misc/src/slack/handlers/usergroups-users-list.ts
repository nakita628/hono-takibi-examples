import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsergroupsUsersListRoute } from '../routes'

export const getUsergroupsUsersListRouteHandler: RouteHandler<
  typeof getUsergroupsUsersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
