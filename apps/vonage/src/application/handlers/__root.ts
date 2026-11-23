import type { RouteHandler } from '@hono/zod-openapi'
import type { getRoute, postRoute } from '../routes'

export const getRouteHandler: RouteHandler<typeof getRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRouteHandler: RouteHandler<typeof postRoute> = async (c) => {
  throw new Error('Not implemented')
}
