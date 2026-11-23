import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsRoute,
  postAccountsUpsertRoute,
  postAccountsUsersAddRoute,
  postAccountsUsersRemoveRoute,
} from '../routes'

export const deleteAccountsRouteHandler: RouteHandler<typeof deleteAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsUpsertRouteHandler: RouteHandler<typeof postAccountsUpsertRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccountsUsersAddRouteHandler: RouteHandler<
  typeof postAccountsUsersAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsUsersRemoveRouteHandler: RouteHandler<
  typeof postAccountsUsersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
