import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionHashReceiptRoute,
  getTransactionHashRoute,
  optionsTransactionHashReceiptRoute,
  optionsTransactionHashRoute,
  optionsTransactionRoute,
  postTransactionRoute,
} from '../routes'

export const optionsTransactionRouteHandler: RouteHandler<typeof optionsTransactionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTransactionRouteHandler: RouteHandler<typeof postTransactionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionHashRouteHandler: RouteHandler<typeof getTransactionHashRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsTransactionHashRouteHandler: RouteHandler<
  typeof optionsTransactionHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionHashReceiptRouteHandler: RouteHandler<
  typeof getTransactionHashReceiptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsTransactionHashReceiptRouteHandler: RouteHandler<
  typeof optionsTransactionHashReceiptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
