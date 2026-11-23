import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWorldsRoute } from '../routes'

export const postListWorldsRouteHandler: RouteHandler<typeof postListWorldsRoute> = async (c) => {
  throw new Error('Not implemented')
}
