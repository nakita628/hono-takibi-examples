import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsersSetPhotoRoute } from '../routes'

export const postUsersSetPhotoRouteHandler: RouteHandler<typeof postUsersSetPhotoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
