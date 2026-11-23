import type { RouteHandler } from '@hono/zod-openapi'
import type { getProjectsUsersRoute } from '../routes'

export const getProjectsUsersRouteHandler: RouteHandler<typeof getProjectsUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
