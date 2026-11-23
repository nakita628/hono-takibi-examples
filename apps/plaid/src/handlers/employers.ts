import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmployersSearchRoute } from '../routes'

export const postEmployersSearchRouteHandler: RouteHandler<
  typeof postEmployersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
