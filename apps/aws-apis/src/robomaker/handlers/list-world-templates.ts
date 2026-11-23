import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWorldTemplatesRoute } from '../routes'

export const postListWorldTemplatesRouteHandler: RouteHandler<
  typeof postListWorldTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
