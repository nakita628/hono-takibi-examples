import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserUsernameRoute,
  getUsersUserUsernameRoute,
  postUsersLoginRoute,
  postUsersLogoutRoute,
  postUsersRoute,
  putUsersUserUsernameRoute,
} from '../routes'

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersLoginRouteHandler: RouteHandler<typeof postUsersLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersLogoutRouteHandler: RouteHandler<typeof postUsersLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserUsernameRouteHandler: RouteHandler<
  typeof deleteUsersUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserUsernameRouteHandler: RouteHandler<
  typeof getUsersUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserUsernameRouteHandler: RouteHandler<
  typeof putUsersUserUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
