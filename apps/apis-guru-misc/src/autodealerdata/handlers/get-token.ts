import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetTokenRoute, postGetTokenRoute } from '../routes'

export const getGetTokenRouteHandler: RouteHandler<typeof getGetTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetTokenRouteHandler: RouteHandler<typeof postGetTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
