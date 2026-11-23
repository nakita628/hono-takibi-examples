import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetUserProfilePhotosRoute } from '../routes'

export const postGetUserProfilePhotosRouteHandler: RouteHandler<
  typeof postGetUserProfilePhotosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
