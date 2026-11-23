import type { RouteHandler } from '@hono/zod-openapi'
import type { postInviteFromWaitlistRoute } from '../routes'

export const postInviteFromWaitlistRouteHandler: RouteHandler<
  typeof postInviteFromWaitlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}
