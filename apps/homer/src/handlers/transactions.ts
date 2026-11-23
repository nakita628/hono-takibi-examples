import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransactionsRoute,
  postTransactionsMessagesRoute,
  postTransactionsQosRoute,
  postTransactionsSearchRoute,
} from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsSearchRouteHandler: RouteHandler<
  typeof postTransactionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsMessagesRouteHandler: RouteHandler<
  typeof postTransactionsMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransactionsQosRouteHandler: RouteHandler<
  typeof postTransactionsQosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
