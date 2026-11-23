import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsDeleteRoute } from '../routes'

export const postGroupsDeleteRouteHandler: RouteHandler<typeof postGroupsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
