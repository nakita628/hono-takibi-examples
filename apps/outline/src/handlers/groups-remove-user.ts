import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsRemoveUserRoute } from '../routes'

export const postGroupsRemoveUserRouteHandler: RouteHandler<
  typeof postGroupsRemoveUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
