import type { RouteHandler } from '@hono/zod-openapi'
import type { getImagesRoute } from '../routes'

export const getImagesRouteHandler: RouteHandler<typeof getImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
