import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsergroupsEnableRoute } from '../routes'

export const postUsergroupsEnableRouteHandler: RouteHandler<
  typeof postUsergroupsEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
