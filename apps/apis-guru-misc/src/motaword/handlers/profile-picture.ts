import type { RouteHandler } from '@hono/zod-openapi'
import type { postProfilePictureRoute } from '../routes'

export const postProfilePictureRouteHandler: RouteHandler<typeof postProfilePictureRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
