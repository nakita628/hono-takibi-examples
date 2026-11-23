import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSessionsRoute, postSessionsRoute } from '../routes'

export const deleteSessionsRouteHandler: RouteHandler<typeof deleteSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
