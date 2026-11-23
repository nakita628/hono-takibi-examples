import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserInvitesUserInviteIdRoute,
  getUserInvitesUserInviteIdRoute,
  postUserInvitesUserInviteIdResendRoute,
} from '../routes'

export const getUserInvitesUserInviteIdRouteHandler: RouteHandler<
  typeof getUserInvitesUserInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserInvitesUserInviteIdRouteHandler: RouteHandler<
  typeof deleteUserInvitesUserInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserInvitesUserInviteIdResendRouteHandler: RouteHandler<
  typeof postUserInvitesUserInviteIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
