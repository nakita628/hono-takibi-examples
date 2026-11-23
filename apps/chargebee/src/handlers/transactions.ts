import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionsRoute,
  getTransactionsTransactionIdRoute,
  postTransactionsCreateAuthorizationRoute,
  postTransactionsTransactionIdDeleteOfflineTransactionRoute,
  postTransactionsTransactionIdReconcileRoute,
  postTransactionsTransactionIdRecordRefundRoute,
  postTransactionsTransactionIdRefundRoute,
  postTransactionsTransactionIdVoidRoute,
} from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdReconcileRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdReconcileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdRefundRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdRecordRefundRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdRecordRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdVoidRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsCreateAuthorizationRouteHandler: RouteHandler<
  typeof postTransactionsCreateAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdDeleteOfflineTransactionRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdDeleteOfflineTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
