import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteTokenRoute, getTokenRoute } from '../routes'

export const deleteTokenRouteHandler: RouteHandler<typeof deleteTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokenRouteHandler: RouteHandler<typeof getTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
