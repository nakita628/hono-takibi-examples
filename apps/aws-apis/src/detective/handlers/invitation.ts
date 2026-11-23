import type { RouteHandler } from '@hono/zod-openapi'
import type { postInvitationRemovalRoute, putInvitationRoute } from '../routes'

export const putInvitationRouteHandler: RouteHandler<typeof putInvitationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationRemovalRouteHandler: RouteHandler<
  typeof postInvitationRemovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}
