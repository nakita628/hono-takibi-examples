import type { RouteHandler } from '@hono/zod-openapi'
import type { postInvitationsListRoute } from '../routes'

export const postInvitationsListRouteHandler: RouteHandler<
  typeof postInvitationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
