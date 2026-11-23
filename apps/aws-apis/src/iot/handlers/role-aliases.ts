import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoleAliasesRoleAliasRoute,
  getRoleAliasesRoleAliasRoute,
  getRoleAliasesRoute,
  postRoleAliasesRoleAliasRoute,
  putRoleAliasesRoleAliasRoute,
} from '../routes'

export const postRoleAliasesRoleAliasRouteHandler: RouteHandler<
  typeof postRoleAliasesRoleAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRoleAliasesRoleAliasRouteHandler: RouteHandler<
  typeof deleteRoleAliasesRoleAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoleAliasesRoleAliasRouteHandler: RouteHandler<
  typeof getRoleAliasesRoleAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRoleAliasesRoleAliasRouteHandler: RouteHandler<
  typeof putRoleAliasesRoleAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoleAliasesRouteHandler: RouteHandler<typeof getRoleAliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}
