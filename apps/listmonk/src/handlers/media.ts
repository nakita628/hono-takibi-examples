import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteMediaIdRoute, getMediaIdRoute, getMediaRoute, postMediaRoute } from '../routes'

export const getMediaRouteHandler: RouteHandler<typeof getMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMediaRouteHandler: RouteHandler<typeof postMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaIdRouteHandler: RouteHandler<typeof getMediaIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMediaIdRouteHandler: RouteHandler<typeof deleteMediaIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
