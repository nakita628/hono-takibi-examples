import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminInviteRequestsDenyRoute } from '../routes'

export const postAdminInviteRequestsDenyRouteHandler: RouteHandler<
  typeof postAdminInviteRequestsDenyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
