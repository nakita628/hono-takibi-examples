import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUsernameRoute,
  getUsersRoute,
  postUsersRoute,
  putUsersUsernamePasswordRoute,
  putUsersUsernameRoleRoute,
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

export const putUsersUsernamePasswordRouteHandler: RouteHandler<
  typeof putUsersUsernamePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUsernameRoleRouteHandler: RouteHandler<
  typeof putUsersUsernameRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
