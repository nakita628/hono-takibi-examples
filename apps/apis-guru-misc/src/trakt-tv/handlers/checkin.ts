import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCheckinRoute, postCheckinRoute } from '../routes'

export const deleteCheckinRouteHandler: RouteHandler<typeof deleteCheckinRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCheckinRouteHandler: RouteHandler<typeof postCheckinRoute> = async (c) => {
  throw new Error('Not implemented')
}
