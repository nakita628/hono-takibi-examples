import type { RouteHandler } from '@hono/zod-openapi'
import type { postImageAvatarRoute } from '../routes'

export const postImageAvatarRouteHandler: RouteHandler<typeof postImageAvatarRoute> = async (c) => {
  throw new Error('Not implemented')
}
