import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsergroupsCreateRoute } from '../routes'

export const postUsergroupsCreateRouteHandler: RouteHandler<
  typeof postUsergroupsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
