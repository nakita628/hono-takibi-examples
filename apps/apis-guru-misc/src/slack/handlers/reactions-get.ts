import type { RouteHandler } from '@hono/zod-openapi'
import type { getReactionsGetRoute } from '../routes'

export const getReactionsGetRouteHandler: RouteHandler<typeof getReactionsGetRoute> = async (c) => {
  throw new Error('Not implemented')
}
