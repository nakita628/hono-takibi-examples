import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountsAccountIdRoute,
  getAccountsRoute,
  patchAccountsAccountIdRoute,
  postAccountsAccountIdCloseRoute,
  postAccountsRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdRouteHandler: RouteHandler<
  typeof getAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountsAccountIdRouteHandler: RouteHandler<
  typeof patchAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountIdCloseRouteHandler: RouteHandler<
  typeof postAccountsAccountIdCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
