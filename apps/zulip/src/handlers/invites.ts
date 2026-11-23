import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInvitesInviteIdRoute,
  deleteInvitesMultiuseInviteIdRoute,
  getInvitesRoute,
  postInvitesInviteIdResendRoute,
  postInvitesMultiuseRoute,
  postInvitesRoute,
} from '../routes'

export const getInvitesRouteHandler: RouteHandler<typeof getInvitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitesRouteHandler: RouteHandler<typeof postInvitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitesMultiuseRouteHandler: RouteHandler<
  typeof postInvitesMultiuseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitesInviteIdRouteHandler: RouteHandler<
  typeof deleteInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitesMultiuseInviteIdRouteHandler: RouteHandler<
  typeof deleteInvitesMultiuseInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitesInviteIdResendRouteHandler: RouteHandler<
  typeof postInvitesInviteIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
