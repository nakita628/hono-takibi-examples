import type { RouteHandler } from '@hono/zod-openapi'
import type { getClipsDownloadsRoute, getClipsRoute, postClipsRoute } from '../routes'

export const postClipsRouteHandler: RouteHandler<typeof postClipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClipsRouteHandler: RouteHandler<typeof getClipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClipsDownloadsRouteHandler: RouteHandler<typeof getClipsDownloadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
