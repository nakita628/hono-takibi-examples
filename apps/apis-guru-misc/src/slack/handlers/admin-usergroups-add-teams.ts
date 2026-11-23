import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminUsergroupsAddTeamsRoute } from '../routes'

export const postAdminUsergroupsAddTeamsRouteHandler: RouteHandler<
  typeof postAdminUsergroupsAddTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
