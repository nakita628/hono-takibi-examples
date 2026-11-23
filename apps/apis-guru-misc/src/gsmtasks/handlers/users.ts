import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersIdIndexRoute,
  deleteUsersIdOnDutyIndexRoute,
  getUsersIdIndexRoute,
  getUsersIdOnDutyIndexRoute,
  getUsersIndexRoute,
  patchUsersIdIndexRoute,
  postUsersIdActivateIndexRoute,
  postUsersIndexRoute,
  putUsersIdIndexRoute,
  putUsersIdOnDutyIndexRoute,
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

export const postUsersIdActivateIndexRouteHandler: RouteHandler<
  typeof postUsersIdActivateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersIdOnDutyIndexRouteHandler: RouteHandler<
  typeof deleteUsersIdOnDutyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdOnDutyIndexRouteHandler: RouteHandler<
  typeof getUsersIdOnDutyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersIdOnDutyIndexRouteHandler: RouteHandler<
  typeof putUsersIdOnDutyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
