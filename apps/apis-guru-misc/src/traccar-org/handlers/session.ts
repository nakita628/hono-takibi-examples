import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSessionRoute, getSessionRoute, postSessionRoute } from '../routes'

export const deleteSessionRouteHandler: RouteHandler<typeof deleteSessionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionRouteHandler: RouteHandler<typeof getSessionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionRouteHandler: RouteHandler<typeof postSessionRoute> = async (c) => {
  throw new Error('Not implemented')
}
