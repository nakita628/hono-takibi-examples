import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserAccountsUserAccountIdRoute,
  getUserAccountsRoute,
  getUserAccountsUserAccountIdRoute,
  patchUserAccountsUserAccountIdRoute,
  postUserAccountsUserAccountIdRoute,
} from '../routes'

export const getUserAccountsRouteHandler: RouteHandler<typeof getUserAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserAccountsUserAccountIdRouteHandler: RouteHandler<
  typeof deleteUserAccountsUserAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserAccountsUserAccountIdRouteHandler: RouteHandler<
  typeof getUserAccountsUserAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchUserAccountsUserAccountIdRouteHandler: RouteHandler<
  typeof patchUserAccountsUserAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserAccountsUserAccountIdRouteHandler: RouteHandler<
  typeof postUserAccountsUserAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
