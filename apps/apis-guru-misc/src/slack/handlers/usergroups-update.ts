import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsergroupsUpdateRoute } from '../routes'

export const postUsergroupsUpdateRouteHandler: RouteHandler<
  typeof postUsergroupsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
