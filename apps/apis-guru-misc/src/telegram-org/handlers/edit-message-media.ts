import type { RouteHandler } from '@hono/zod-openapi'
import type { postEditMessageMediaRoute } from '../routes'

export const postEditMessageMediaRouteHandler: RouteHandler<
  typeof postEditMessageMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
