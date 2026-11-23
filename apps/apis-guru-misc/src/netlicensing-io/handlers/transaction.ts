import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionRoute,
  getTransactionTransactionNumberRoute,
  postTransactionRoute,
  postTransactionTransactionNumberRoute,
} from '../routes'

export const getTransactionRouteHandler: RouteHandler<typeof getTransactionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionRouteHandler: RouteHandler<typeof postTransactionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionTransactionNumberRouteHandler: RouteHandler<
  typeof getTransactionTransactionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionTransactionNumberRouteHandler: RouteHandler<
  typeof postTransactionTransactionNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
