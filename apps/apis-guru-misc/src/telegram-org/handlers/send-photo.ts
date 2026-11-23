import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendPhotoRoute } from '../routes'

export const postSendPhotoRouteHandler: RouteHandler<typeof postSendPhotoRoute> = async (c) => {
  throw new Error('Not implemented')
}
