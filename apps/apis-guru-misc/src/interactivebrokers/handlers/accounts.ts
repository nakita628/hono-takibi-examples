import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersRoute,
  getAccountsAccountPositionsRoute,
  getAccountsAccountSummaryRoute,
  getAccountsAccountTradesRoute,
  getAccountsRoute,
  postAccountsAccountOrderImpactRoute,
  postAccountsAccountOrdersRoute,
  putAccountsAccountOrdersCustomerOrderIdRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountOrderImpactRouteHandler: RouteHandler<
  typeof postAccountsAccountOrderImpactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountOrdersRouteHandler: RouteHandler<
  typeof getAccountsAccountOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountOrdersRouteHandler: RouteHandler<
  typeof postAccountsAccountOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAccountOrdersCustomerOrderIdRouteHandler: RouteHandler<
  typeof deleteAccountsAccountOrdersCustomerOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountOrdersCustomerOrderIdRouteHandler: RouteHandler<
  typeof getAccountsAccountOrdersCustomerOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAccountOrdersCustomerOrderIdRouteHandler: RouteHandler<
  typeof putAccountsAccountOrdersCustomerOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountPositionsRouteHandler: RouteHandler<
  typeof getAccountsAccountPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountSummaryRouteHandler: RouteHandler<
  typeof getAccountsAccountSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountTradesRouteHandler: RouteHandler<
  typeof getAccountsAccountTradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
