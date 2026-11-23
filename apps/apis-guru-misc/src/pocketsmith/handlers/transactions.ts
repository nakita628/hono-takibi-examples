import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransactionsIdRoute,
  deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute,
  getTransactionsIdAttachmentsRoute,
  getTransactionsIdRoute,
  postTransactionsIdAttachmentsRoute,
  putTransactionsIdRoute,
} from '../routes'

export const deleteTransactionsIdRouteHandler: RouteHandler<
  typeof deleteTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdRouteHandler: RouteHandler<typeof getTransactionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTransactionsIdRouteHandler: RouteHandler<typeof putTransactionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdAttachmentsRouteHandler: RouteHandler<
  typeof getTransactionsIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsIdAttachmentsRouteHandler: RouteHandler<
  typeof postTransactionsIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransactionsTransactionIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteTransactionsTransactionIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
