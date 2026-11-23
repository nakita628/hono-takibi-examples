import type { RouteHandler } from '@hono/zod-openapi'
import type { postListComponentsRoute } from '../routes'

export const postListComponentsRouteHandler: RouteHandler<typeof postListComponentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
