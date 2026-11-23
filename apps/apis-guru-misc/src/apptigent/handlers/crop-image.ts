import type { RouteHandler } from '@hono/zod-openapi'
import type { postCropImageRoute } from '../routes'

export const postCropImageRouteHandler: RouteHandler<typeof postCropImageRoute> = async (c) => {
  throw new Error('Not implemented')
}
