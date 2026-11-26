import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvitesCodeRoute,
  deleteInvitesCodeRoute,
  getInvitesCodeTargetUsersRoute,
  putInvitesCodeTargetUsersRoute,
  postInvitesCodeTargetUsersBulkAddRoute,
  postInvitesCodeTargetUsersBulkDeleteRoute,
  getInvitesCodeTargetUsersJobStatusRoute,
  putInvitesCodeTargetUsersUserIdRoute,
  deleteInvitesCodeTargetUsersUserIdRoute,
} from '../routes'

export const getInvitesCodeRouteHandler: RouteHandler<typeof getInvitesCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitesCodeRouteHandler: RouteHandler<typeof deleteInvitesCodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInvitesCodeTargetUsersRouteHandler: RouteHandler<
  typeof getInvitesCodeTargetUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvitesCodeTargetUsersRouteHandler: RouteHandler<
  typeof putInvitesCodeTargetUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitesCodeTargetUsersBulkAddRouteHandler: RouteHandler<
  typeof postInvitesCodeTargetUsersBulkAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvitesCodeTargetUsersBulkDeleteRouteHandler: RouteHandler<
  typeof postInvitesCodeTargetUsersBulkDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvitesCodeTargetUsersJobStatusRouteHandler: RouteHandler<
  typeof getInvitesCodeTargetUsersJobStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvitesCodeTargetUsersUserIdRouteHandler: RouteHandler<
  typeof putInvitesCodeTargetUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInvitesCodeTargetUsersUserIdRouteHandler: RouteHandler<
  typeof deleteInvitesCodeTargetUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
