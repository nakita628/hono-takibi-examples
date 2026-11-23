import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsergroupsDisableRoute } from '../routes'

export const postUsergroupsDisableRouteHandler: RouteHandler<
  typeof postUsergroupsDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
