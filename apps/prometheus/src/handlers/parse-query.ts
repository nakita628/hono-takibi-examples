import type { RouteHandler } from '@hono/zod-openapi'
import type { getParseQueryRoute, postParseQueryRoute } from '../routes'

export const getParseQueryRouteHandler: RouteHandler<typeof getParseQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postParseQueryRouteHandler: RouteHandler<typeof postParseQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
