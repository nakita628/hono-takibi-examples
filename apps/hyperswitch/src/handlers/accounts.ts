import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdRoute,
  postAccountsAccountIdKvRoute,
  postAccountsAccountIdRoute,
  postAccountsRoute,
} from '../routes'

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdRouteHandler: RouteHandler<
  typeof getAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountIdRouteHandler: RouteHandler<
  typeof postAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAccountIdRouteHandler: RouteHandler<
  typeof deleteAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountIdKvRouteHandler: RouteHandler<
  typeof postAccountsAccountIdKvRoute
> = async (c) => {
  throw new Error('Not implemented')
}
