import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteUsersIdRoute, getUsersRoute, postUsersRoute, putUsersIdRoute } from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersIdRouteHandler: RouteHandler<typeof deleteUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersIdRouteHandler: RouteHandler<typeof putUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
