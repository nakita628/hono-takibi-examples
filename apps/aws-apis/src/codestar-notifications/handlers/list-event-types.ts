import type { RouteHandler } from '@hono/zod-openapi'
import type { postListEventTypesRoute } from '../routes'

export const postListEventTypesRouteHandler: RouteHandler<typeof postListEventTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
