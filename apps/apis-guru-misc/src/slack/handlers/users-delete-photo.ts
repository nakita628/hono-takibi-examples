import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersDeletePhotoRoute } from '../routes'

export const postUsersDeletePhotoRouteHandler: RouteHandler<
  typeof postUsersDeletePhotoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
