import type { RouteHandler } from '@hono/zod-openapi'
import type { postSetChatPhotoRoute } from '../routes'

export const postSetChatPhotoRouteHandler: RouteHandler<typeof postSetChatPhotoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
