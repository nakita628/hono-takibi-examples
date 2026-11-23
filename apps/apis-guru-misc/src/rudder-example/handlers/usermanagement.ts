import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsermanagementUsernameRoute,
  getUsermanagementRolesRoute,
  getUsermanagementUsersReloadRoute,
  getUsermanagementUsersRoute,
  postUsermanagementRoute,
  postUsermanagementUpdateUsernameRoute,
} from '../routes'

export const postUsermanagementRouteHandler: RouteHandler<typeof postUsermanagementRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsermanagementRolesRouteHandler: RouteHandler<
  typeof getUsermanagementRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsermanagementUpdateUsernameRouteHandler: RouteHandler<
  typeof postUsermanagementUpdateUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsermanagementUsersRouteHandler: RouteHandler<
  typeof getUsermanagementUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsermanagementUsersReloadRouteHandler: RouteHandler<
  typeof getUsermanagementUsersReloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsermanagementUsernameRouteHandler: RouteHandler<
  typeof deleteUsermanagementUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
