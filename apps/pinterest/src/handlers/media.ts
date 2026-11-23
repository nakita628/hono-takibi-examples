import type { RouteHandler } from '@hono/zod-openapi'
import type { getMediaMediaIdRoute, getMediaRoute, postMediaRoute } from '../routes'

export const getMediaRouteHandler: RouteHandler<typeof getMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMediaRouteHandler: RouteHandler<typeof postMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaMediaIdRouteHandler: RouteHandler<typeof getMediaMediaIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
