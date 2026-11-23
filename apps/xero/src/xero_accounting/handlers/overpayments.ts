import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute,
  getOverpaymentsOverpaymentIDHistoryRoute,
  getOverpaymentsOverpaymentIDRoute,
  getOverpaymentsRoute,
  putOverpaymentsOverpaymentIDAllocationsRoute,
  putOverpaymentsOverpaymentIDHistoryRoute,
} from '../routes'

export const getOverpaymentsRouteHandler: RouteHandler<typeof getOverpaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOverpaymentsOverpaymentIDRouteHandler: RouteHandler<
  typeof getOverpaymentsOverpaymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOverpaymentsOverpaymentIDAllocationsRouteHandler: RouteHandler<
  typeof putOverpaymentsOverpaymentIDAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRouteHandler: RouteHandler<
  typeof deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOverpaymentsOverpaymentIDHistoryRouteHandler: RouteHandler<
  typeof getOverpaymentsOverpaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOverpaymentsOverpaymentIDHistoryRouteHandler: RouteHandler<
  typeof putOverpaymentsOverpaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
