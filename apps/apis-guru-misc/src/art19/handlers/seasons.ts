import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeasonsIdRoute, getSeasonsRoute } from '../routes'

export const getSeasonsRouteHandler: RouteHandler<typeof getSeasonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeasonsIdRouteHandler: RouteHandler<typeof getSeasonsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
