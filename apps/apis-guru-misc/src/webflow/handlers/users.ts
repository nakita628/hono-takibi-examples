import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserIdRoute,
  getUsersRoute,
  getUsersUserIdRoute,
  optionsUsersRoute,
  optionsUsersUserIdRoute,
  patchUsersUserIdRoute,
  postUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsUsersRouteHandler: RouteHandler<typeof optionsUsersRoute> = async (c) => {
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

export const optionsUsersUserIdRouteHandler: RouteHandler<typeof optionsUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchUsersUserIdRouteHandler: RouteHandler<typeof patchUsersUserIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
