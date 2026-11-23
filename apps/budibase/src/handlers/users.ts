import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersUserIdRoute,
  postUsersRoute,
  postUsersSearchRoute,
  putUsersUserIdRoute,
} from '../routes'

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdRouteHandler: RouteHandler<typeof putUsersUserIdRoute> = async (c) => {
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

export const postUsersSearchRouteHandler: RouteHandler<typeof postUsersSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
