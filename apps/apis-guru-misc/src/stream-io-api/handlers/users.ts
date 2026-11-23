import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdExportRoute,
  patchUsersRoute,
  postUsersDeactivateRoute,
  postUsersDeleteRoute,
  postUsersReactivateRoute,
  postUsersRestoreRoute,
  postUsersRoute,
  postUsersUserIdDeactivateRoute,
  postUsersUserIdEventRoute,
  postUsersUserIdReactivateRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersRouteHandler: RouteHandler<typeof patchUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersDeactivateRouteHandler: RouteHandler<
  typeof postUsersDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersDeleteRouteHandler: RouteHandler<typeof postUsersDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersReactivateRouteHandler: RouteHandler<
  typeof postUsersReactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRestoreRouteHandler: RouteHandler<typeof postUsersRestoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserIdRouteHandler: RouteHandler<typeof deleteUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdDeactivateRouteHandler: RouteHandler<
  typeof postUsersUserIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdEventRouteHandler: RouteHandler<
  typeof postUsersUserIdEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdExportRouteHandler: RouteHandler<
  typeof getUsersUserIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdReactivateRouteHandler: RouteHandler<
  typeof postUsersUserIdReactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
