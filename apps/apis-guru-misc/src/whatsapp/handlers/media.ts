import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteMediaMediaIdRoute, getMediaMediaIdRoute, postMediaRoute } from '../routes'

export const postMediaRouteHandler: RouteHandler<typeof postMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMediaMediaIdRouteHandler: RouteHandler<typeof deleteMediaMediaIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMediaMediaIdRouteHandler: RouteHandler<typeof getMediaMediaIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
