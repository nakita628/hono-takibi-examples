import type { RouteHandler } from '@hono/zod-openapi'
import type { getReturnsRoute, putReturnsRoute } from '../routes'

export const getReturnsRouteHandler: RouteHandler<typeof getReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putReturnsRouteHandler: RouteHandler<typeof putReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}
