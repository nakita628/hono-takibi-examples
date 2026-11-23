import type { RouteHandler } from '@hono/zod-openapi'
import type { postViewsListRoute } from '../routes'

export const postViewsListRouteHandler: RouteHandler<typeof postViewsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
