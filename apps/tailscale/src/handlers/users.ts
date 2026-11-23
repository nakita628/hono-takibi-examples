import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersUserIdRoute,
  postUsersUserIdApproveRoute,
  postUsersUserIdDeleteRoute,
  postUsersUserIdRestoreRoute,
  postUsersUserIdRoleRoute,
  postUsersUserIdSuspendRoute,
} from '../routes'

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdRoleRouteHandler: RouteHandler<
  typeof postUsersUserIdRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdApproveRouteHandler: RouteHandler<
  typeof postUsersUserIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdSuspendRouteHandler: RouteHandler<
  typeof postUsersUserIdSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdRestoreRouteHandler: RouteHandler<
  typeof postUsersUserIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdDeleteRouteHandler: RouteHandler<
  typeof postUsersUserIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
