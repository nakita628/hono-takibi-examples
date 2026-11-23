import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteChatPhotoRoute } from '../routes'

export const postDeleteChatPhotoRouteHandler: RouteHandler<
  typeof postDeleteChatPhotoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
