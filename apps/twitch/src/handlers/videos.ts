import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteVideosRoute, getVideosRoute, postVideosClipsRoute } from '../routes'

export const postVideosClipsRouteHandler: RouteHandler<typeof postVideosClipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideosRouteHandler: RouteHandler<typeof getVideosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVideosRouteHandler: RouteHandler<typeof deleteVideosRoute> = async (c) => {
  throw new Error('Not implemented')
}
