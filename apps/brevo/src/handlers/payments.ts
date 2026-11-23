import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentsRequestsIdRoute,
  getPaymentsRequestsIdRoute,
  postPaymentsRequestsRoute,
} from '../routes'

export const postPaymentsRequestsRouteHandler: RouteHandler<
  typeof postPaymentsRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePaymentsRequestsIdRouteHandler: RouteHandler<
  typeof deletePaymentsRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsRequestsIdRouteHandler: RouteHandler<
  typeof getPaymentsRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
