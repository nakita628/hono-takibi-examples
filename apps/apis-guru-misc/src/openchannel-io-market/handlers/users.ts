import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  patchUsersUserIdRoute,
  postUsersUserIdRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserIdRouteHandler: RouteHandler<typeof deleteUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersUserIdRouteHandler: RouteHandler<typeof patchUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdRouteHandler: RouteHandler<typeof postUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
