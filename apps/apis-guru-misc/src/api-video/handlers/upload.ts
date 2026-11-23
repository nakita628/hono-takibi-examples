import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadRoute } from '../routes'

export const postUploadRouteHandler: RouteHandler<typeof postUploadRoute> = async (c) => {
  throw new Error('Not implemented')
}
