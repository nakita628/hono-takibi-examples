import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBatchPaymentsBatchPaymentIDHistoryRoute,
  getBatchPaymentsBatchPaymentIDRoute,
  getBatchPaymentsRoute,
  postBatchPaymentsBatchPaymentIDRoute,
  postBatchPaymentsRoute,
  putBatchPaymentsBatchPaymentIDHistoryRoute,
  putBatchPaymentsRoute,
} from '../routes'

export const getBatchPaymentsRouteHandler: RouteHandler<typeof getBatchPaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBatchPaymentsRouteHandler: RouteHandler<typeof putBatchPaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBatchPaymentsRouteHandler: RouteHandler<typeof postBatchPaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBatchPaymentsBatchPaymentIDRouteHandler: RouteHandler<
  typeof getBatchPaymentsBatchPaymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBatchPaymentsBatchPaymentIDRouteHandler: RouteHandler<
  typeof postBatchPaymentsBatchPaymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBatchPaymentsBatchPaymentIDHistoryRouteHandler: RouteHandler<
  typeof getBatchPaymentsBatchPaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBatchPaymentsBatchPaymentIDHistoryRouteHandler: RouteHandler<
  typeof putBatchPaymentsBatchPaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
