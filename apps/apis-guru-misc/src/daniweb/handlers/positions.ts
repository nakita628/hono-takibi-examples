import type { RouteHandler } from '@hono/zod-openapi'
import type { deletePositionsIDRoute, patchPositionsIDRoute, postPositionsRoute } from '../routes'

export const postPositionsRouteHandler: RouteHandler<typeof postPositionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePositionsIDRouteHandler: RouteHandler<typeof deletePositionsIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPositionsIDRouteHandler: RouteHandler<typeof patchPositionsIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
