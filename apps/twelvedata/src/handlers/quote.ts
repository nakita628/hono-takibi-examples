import type { RouteHandler } from '@hono/zod-openapi'
import type { getQuoteRoute } from '../routes'

export const getQuoteRouteHandler: RouteHandler<typeof getQuoteRoute> = async (c) => {
  throw new Error('Not implemented')
}
