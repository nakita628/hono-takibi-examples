import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdConversationsRoute,
  getUsersUserIdRoute,
  postUsersRoute,
  putUsersUserIdRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
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

export const putUsersUserIdRouteHandler: RouteHandler<typeof putUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdConversationsRouteHandler: RouteHandler<
  typeof getUsersUserIdConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
