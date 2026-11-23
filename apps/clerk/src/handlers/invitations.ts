import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInvitationsInvitationIdRoute,
  getInvitationsRoute,
  postInvitationsBulkRoute,
  postInvitationsInvitationIdRevokeRoute,
  postInvitationsRoute,
} from '../routes'

export const postInvitationsRouteHandler: RouteHandler<typeof postInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitationsRouteHandler: RouteHandler<typeof getInvitationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationsBulkRouteHandler: RouteHandler<
  typeof postInvitationsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitationsInvitationIdRevokeRouteHandler: RouteHandler<
  typeof postInvitationsInvitationIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
