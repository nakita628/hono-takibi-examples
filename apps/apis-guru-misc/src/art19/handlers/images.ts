import type { RouteHandler } from '@hono/zod-openapi'
import type { getImagesIdRoute, getImagesRoute } from '../routes'

export const getImagesRouteHandler: RouteHandler<typeof getImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesIdRouteHandler: RouteHandler<typeof getImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
