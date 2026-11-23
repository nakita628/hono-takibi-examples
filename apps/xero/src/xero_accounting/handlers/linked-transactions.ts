import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLinkedTransactionsLinkedTransactionIDRoute,
  getLinkedTransactionsLinkedTransactionIDRoute,
  getLinkedTransactionsRoute,
  postLinkedTransactionsLinkedTransactionIDRoute,
  putLinkedTransactionsRoute,
} from '../routes'

export const getLinkedTransactionsRouteHandler: RouteHandler<
  typeof getLinkedTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLinkedTransactionsRouteHandler: RouteHandler<
  typeof putLinkedTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLinkedTransactionsLinkedTransactionIDRouteHandler: RouteHandler<
  typeof getLinkedTransactionsLinkedTransactionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLinkedTransactionsLinkedTransactionIDRouteHandler: RouteHandler<
  typeof postLinkedTransactionsLinkedTransactionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLinkedTransactionsLinkedTransactionIDRouteHandler: RouteHandler<
  typeof deleteLinkedTransactionsLinkedTransactionIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
