import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnythingRoute, postAnythingRoute, putAnythingRoute } from '../routes'

export const getAnythingRouteHandler: RouteHandler<typeof getAnythingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingRouteHandler: RouteHandler<typeof postAnythingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAnythingRouteHandler: RouteHandler<typeof putAnythingRoute> = async (c) => {
  throw new Error('Not implemented')
}
