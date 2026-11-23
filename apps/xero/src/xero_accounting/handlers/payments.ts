import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentsPaymentIDHistoryRoute,
  getPaymentsPaymentIDRoute,
  getPaymentsRoute,
  postPaymentsPaymentIDRoute,
  postPaymentsRoute,
  putPaymentsPaymentIDHistoryRoute,
  putPaymentsRoute,
} from '../routes'

export const getPaymentsRouteHandler: RouteHandler<typeof getPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentsRouteHandler: RouteHandler<typeof putPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsRouteHandler: RouteHandler<typeof postPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsPaymentIDRouteHandler: RouteHandler<
  typeof getPaymentsPaymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsPaymentIDRouteHandler: RouteHandler<
  typeof postPaymentsPaymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsPaymentIDHistoryRouteHandler: RouteHandler<
  typeof getPaymentsPaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentsPaymentIDHistoryRouteHandler: RouteHandler<
  typeof putPaymentsPaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
