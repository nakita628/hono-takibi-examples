import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteLocksPathRoute, getLocksPathRoute, postLocksPathRoute } from '../routes'

export const deleteLocksPathRouteHandler: RouteHandler<typeof deleteLocksPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocksPathRouteHandler: RouteHandler<typeof getLocksPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLocksPathRouteHandler: RouteHandler<typeof postLocksPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
