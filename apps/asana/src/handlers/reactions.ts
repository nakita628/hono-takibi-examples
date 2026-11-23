import type { RouteHandler } from '@hono/zod-openapi'
import type { getReactionsRoute } from '../routes'

export const getReactionsRouteHandler: RouteHandler<typeof getReactionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
