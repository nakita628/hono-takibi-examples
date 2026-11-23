import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShareInvitationsRoute,
  patchShareInvitationsShareInvitationIdRoute,
} from '../routes'

export const getShareInvitationsRouteHandler: RouteHandler<
  typeof getShareInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchShareInvitationsShareInvitationIdRouteHandler: RouteHandler<
  typeof patchShareInvitationsShareInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
