import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryRoute, postQueryRoute } from '../routes'

export const getQueryRouteHandler: RouteHandler<typeof getQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueryRouteHandler: RouteHandler<typeof postQueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
