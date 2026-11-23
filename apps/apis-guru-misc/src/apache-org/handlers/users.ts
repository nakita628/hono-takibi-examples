import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUsernameRoute,
  getUsersRoute,
  getUsersUsernameRoute,
  patchUsersUsernameRoute,
  postUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersUsernameRouteHandler: RouteHandler<
  typeof deleteUsersUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUsernameRouteHandler: RouteHandler<typeof getUsersUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchUsersUsernameRouteHandler: RouteHandler<typeof patchUsersUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
