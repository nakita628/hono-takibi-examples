import type { RouteHandler } from '@hono/zod-openapi'
import type { getFlushRoute, postFlushRoute } from '../routes'

export const getFlushRouteHandler: RouteHandler<typeof getFlushRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFlushRouteHandler: RouteHandler<typeof postFlushRoute> = async (c) => {
  throw new Error('Not implemented')
}
