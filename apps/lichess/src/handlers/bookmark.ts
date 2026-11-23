import type { RouteHandler } from '@hono/zod-openapi'
import type { postBookmarkGameIdRoute } from '../routes'

export const postBookmarkGameIdRouteHandler: RouteHandler<typeof postBookmarkGameIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
