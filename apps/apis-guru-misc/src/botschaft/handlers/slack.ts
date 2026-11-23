import type { RouteHandler } from '@hono/zod-openapi'
import type { getSlackRoute, postSlackRoute } from '../routes'

export const getSlackRouteHandler: RouteHandler<typeof getSlackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSlackRouteHandler: RouteHandler<typeof postSlackRoute> = async (c) => {
  throw new Error('Not implemented')
}
