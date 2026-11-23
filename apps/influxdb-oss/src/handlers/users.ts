import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIDRoute,
  getUsersRoute,
  getUsersUserIDRoute,
  patchUsersUserIDRoute,
  postUsersRoute,
  postUsersUserIDPasswordRoute,
  putUsersUserIDPasswordRoute,
} from '../routes'

export const postUsersUserIDPasswordRouteHandler: RouteHandler<
  typeof postUsersUserIDPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIDPasswordRouteHandler: RouteHandler<
  typeof putUsersUserIDPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIDRouteHandler: RouteHandler<typeof getUsersUserIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersUserIDRouteHandler: RouteHandler<typeof patchUsersUserIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserIDRouteHandler: RouteHandler<typeof deleteUsersUserIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
