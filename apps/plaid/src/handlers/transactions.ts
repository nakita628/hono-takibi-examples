import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postTransactionsEnrichRoute,
  postTransactionsGetRoute,
  postTransactionsRecurringGetRoute,
  postTransactionsRefreshRoute,
  postTransactionsSyncRoute,
} from '../routes'

export const postTransactionsGetRouteHandler: RouteHandler<
  typeof postTransactionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsRefreshRouteHandler: RouteHandler<
  typeof postTransactionsRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsRecurringGetRouteHandler: RouteHandler<
  typeof postTransactionsRecurringGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsSyncRouteHandler: RouteHandler<
  typeof postTransactionsSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsEnrichRouteHandler: RouteHandler<
  typeof postTransactionsEnrichRoute
> = async (c) => {
  throw new Error('Not implemented')
}
