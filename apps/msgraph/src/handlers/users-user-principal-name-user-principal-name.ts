import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUsersUserPrincipalNameUserPrincipalNameRoute,
  getUsersUserPrincipalNameUserPrincipalNameRoute,
  patchUsersUserPrincipalNameUserPrincipalNameRoute,
} from '../routes'

export const getUsersUserPrincipalNameUserPrincipalNameRouteHandler: RouteHandler<
  typeof getUsersUserPrincipalNameUserPrincipalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUsersUserPrincipalNameUserPrincipalNameRouteHandler: RouteHandler<
  typeof patchUsersUserPrincipalNameUserPrincipalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUsersUserPrincipalNameUserPrincipalNameRouteHandler: RouteHandler<
  typeof deleteUsersUserPrincipalNameUserPrincipalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
