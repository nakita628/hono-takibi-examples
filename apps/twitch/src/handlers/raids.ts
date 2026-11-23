import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteRaidsRoute, postRaidsRoute } from '../routes'

export const postRaidsRouteHandler: RouteHandler<typeof postRaidsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRaidsRouteHandler: RouteHandler<typeof deleteRaidsRoute> = async (c) => {
  throw new Error('Not implemented')
}
