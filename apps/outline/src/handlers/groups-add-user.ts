import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsAddUserRoute } from '../routes'

export const postGroupsAddUserRouteHandler: RouteHandler<typeof postGroupsAddUserRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
