import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersBlocksRoute,
  getUsersBlocksRoute,
  getUsersExtensionsListRoute,
  getUsersExtensionsRoute,
  getUsersRoute,
  putUsersBlocksRoute,
  putUsersExtensionsRoute,
  putUsersRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersRouteHandler: RouteHandler<typeof putUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersBlocksRouteHandler: RouteHandler<typeof getUsersBlocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersBlocksRouteHandler: RouteHandler<typeof putUsersBlocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersBlocksRouteHandler: RouteHandler<typeof deleteUsersBlocksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersExtensionsListRouteHandler: RouteHandler<
  typeof getUsersExtensionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersExtensionsRouteHandler: RouteHandler<typeof getUsersExtensionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUsersExtensionsRouteHandler: RouteHandler<typeof putUsersExtensionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
