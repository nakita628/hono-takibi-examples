import type { RouteHandler } from '@hono/zod-openapi'
import type { getClicksRoute, postClicksPgRoute } from '../routes'

export const getClicksRouteHandler: RouteHandler<typeof getClicksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postClicksPgRouteHandler: RouteHandler<typeof postClicksPgRoute> = async (c) => {
  throw new Error('Not implemented')
}
