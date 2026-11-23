import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postWalletCreateRoute,
  postWalletGetRoute,
  postWalletListRoute,
  postWalletTransactionExecuteRoute,
  postWalletTransactionGetRoute,
  postWalletTransactionListRoute,
} from '../routes'

export const postWalletCreateRouteHandler: RouteHandler<typeof postWalletCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWalletGetRouteHandler: RouteHandler<typeof postWalletGetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWalletListRouteHandler: RouteHandler<typeof postWalletListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWalletTransactionExecuteRouteHandler: RouteHandler<
  typeof postWalletTransactionExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWalletTransactionGetRouteHandler: RouteHandler<
  typeof postWalletTransactionGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWalletTransactionListRouteHandler: RouteHandler<
  typeof postWalletTransactionListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
