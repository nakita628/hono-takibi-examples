import type { RouteHandler } from '@hono/zod-openapi'
import type { getSessionsRoute, patchSessionsRoute, postSessionsRoute } from '../routes'

export const getSessionsRouteHandler: RouteHandler<typeof getSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSessionsRouteHandler: RouteHandler<typeof patchSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
