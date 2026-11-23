import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransactionsTransactionIdRelationshipsTagsRoute,
  getTransactionsIdRoute,
  getTransactionsRoute,
  patchTransactionsTransactionIdRelationshipsCategoryRoute,
  postTransactionsTransactionIdRelationshipsTagsRoute,
} from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdRouteHandler: RouteHandler<typeof getTransactionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchTransactionsTransactionIdRelationshipsCategoryRouteHandler: RouteHandler<
  typeof patchTransactionsTransactionIdRelationshipsCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransactionsTransactionIdRelationshipsTagsRouteHandler: RouteHandler<
  typeof deleteTransactionsTransactionIdRelationshipsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsTransactionIdRelationshipsTagsRouteHandler: RouteHandler<
  typeof postTransactionsTransactionIdRelationshipsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
