import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersIdRoute,
  getUsersIdRoute,
  getUsersRoute,
  patchUsersIdRoute,
  postUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersIdRouteHandler: RouteHandler<typeof deleteUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdRouteHandler: RouteHandler<typeof getUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersIdRouteHandler: RouteHandler<typeof patchUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
