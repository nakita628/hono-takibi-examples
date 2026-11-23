import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionsRoute,
  getTransactionsTransactionIdInvoiceRoute,
  getTransactionsTransactionIdRoute,
  patchTransactionsTransactionIdRoute,
  postTransactionsPreviewRoute,
  postTransactionsRoute,
  postTransactionsTransactionIdReviseRoute,
} from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsRouteHandler: RouteHandler<typeof postTransactionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof patchTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsPreviewRouteHandler: RouteHandler<
  typeof postTransactionsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdReviseRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdReviseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsTransactionIdInvoiceRouteHandler: RouteHandler<
  typeof getTransactionsTransactionIdInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
