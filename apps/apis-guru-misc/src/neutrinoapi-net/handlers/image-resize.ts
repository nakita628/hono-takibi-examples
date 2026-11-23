import type { RouteHandler } from '@hono/zod-openapi'
import type { postImageResizeRoute } from '../routes'

export const postImageResizeRouteHandler: RouteHandler<typeof postImageResizeRoute> = async (c) => {
  throw new Error('Not implemented')
}
