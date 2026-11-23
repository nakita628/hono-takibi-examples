import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransactionsIdRoute, getTransactionsRoute } from '../routes'

export const getTransactionsRouteHandler: RouteHandler<typeof getTransactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransactionsIdRouteHandler: RouteHandler<typeof getTransactionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
