import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsUpdateRoute } from '../routes'

export const postGroupsUpdateRouteHandler: RouteHandler<typeof postGroupsUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
