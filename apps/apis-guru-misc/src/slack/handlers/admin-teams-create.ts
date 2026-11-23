import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminTeamsCreateRoute } from '../routes'

export const postAdminTeamsCreateRouteHandler: RouteHandler<
  typeof postAdminTeamsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
