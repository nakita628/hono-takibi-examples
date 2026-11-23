import type { RouteHandler } from '@hono/zod-openapi'
import type { getRouteInfoRoute, getRouteRoute, postRouteRoute } from '../routes'

export const getRouteRouteHandler: RouteHandler<typeof getRouteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRouteRouteHandler: RouteHandler<typeof postRouteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRouteInfoRouteHandler: RouteHandler<typeof getRouteInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
