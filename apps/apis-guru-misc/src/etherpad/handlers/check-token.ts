import type { RouteHandler } from '@hono/zod-openapi'
import type { getCheckTokenRoute, postCheckTokenRoute } from '../routes'

export const getCheckTokenRouteHandler: RouteHandler<typeof getCheckTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCheckTokenRouteHandler: RouteHandler<typeof postCheckTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
