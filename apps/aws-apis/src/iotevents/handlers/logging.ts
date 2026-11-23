import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoggingRoute, putLoggingRoute } from '../routes'

export const getLoggingRouteHandler: RouteHandler<typeof getLoggingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLoggingRouteHandler: RouteHandler<typeof putLoggingRoute> = async (c) => {
  throw new Error('Not implemented')
}
