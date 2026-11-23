import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersOnDutyLogIdIndexRoute,
  getUsersOnDutyLogIndexRoute,
  postUsersOnDutyLogIndexRoute,
} from '../routes'

export const getUsersOnDutyLogIndexRouteHandler: RouteHandler<
  typeof getUsersOnDutyLogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersOnDutyLogIndexRouteHandler: RouteHandler<
  typeof postUsersOnDutyLogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersOnDutyLogIdIndexRouteHandler: RouteHandler<
  typeof getUsersOnDutyLogIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
