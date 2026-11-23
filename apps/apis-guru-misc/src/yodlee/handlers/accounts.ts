import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdRoute,
  getAccountsHistoricalBalancesRoute,
  getAccountsRoute,
  postAccountsEvaluateAddressRoute,
  postAccountsRoute,
  putAccountsAccountIdRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsRouteHandler: RouteHandler<typeof postAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsEvaluateAddressRouteHandler: RouteHandler<
  typeof postAccountsEvaluateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsHistoricalBalancesRouteHandler: RouteHandler<
  typeof getAccountsHistoricalBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAccountIdRouteHandler: RouteHandler<
  typeof deleteAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIdRouteHandler: RouteHandler<
  typeof getAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAccountIdRouteHandler: RouteHandler<
  typeof putAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
