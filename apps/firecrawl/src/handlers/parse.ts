import type { RouteHandler } from '@hono/zod-openapi'
import type { getParseFormatsRoute, postParseRoute } from '../routes'

export const postParseRouteHandler: RouteHandler<typeof postParseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getParseFormatsRouteHandler: RouteHandler<typeof getParseFormatsRoute> = async (c) => {
  throw new Error('Not implemented')
}
