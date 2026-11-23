import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsUpdateUserRoute } from '../routes'

export const postGroupsUpdateUserRouteHandler: RouteHandler<
  typeof postGroupsUpdateUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
