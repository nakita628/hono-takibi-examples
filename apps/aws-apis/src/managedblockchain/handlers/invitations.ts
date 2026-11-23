import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteInvitationsInvitationIdRoute, getInvitationsRoute } from '../routes'

export const getInvitationsRouteHandler: RouteHandler<typeof getInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
