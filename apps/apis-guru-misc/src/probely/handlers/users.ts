import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersIdIndexRoute,
  getUsersIdIndexRoute,
  getUsersIndexRoute,
  patchUsersIdIndexRoute,
  postUsersIndexRoute,
  putUsersIdIndexRoute,
} from '../routes'

export const getUsersIndexRouteHandler: RouteHandler<typeof getUsersIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersIndexRouteHandler: RouteHandler<typeof postUsersIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersIdIndexRouteHandler: RouteHandler<typeof deleteUsersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersIdIndexRouteHandler: RouteHandler<typeof getUsersIdIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersIdIndexRouteHandler: RouteHandler<typeof patchUsersIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUsersIdIndexRouteHandler: RouteHandler<typeof putUsersIdIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
