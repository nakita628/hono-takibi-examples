import type { RouteHandler } from '@hono/zod-openapi'
import type { putUsersPasswordResetTokenJsonRoute } from '../routes'

export const putUsersPasswordResetTokenJsonRouteHandler: RouteHandler<
  typeof putUsersPasswordResetTokenJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
