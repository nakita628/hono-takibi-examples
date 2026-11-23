import type { RouteHandler } from '@hono/zod-openapi'
import type { postEditMessageTextRoute } from '../routes'

export const postEditMessageTextRouteHandler: RouteHandler<
  typeof postEditMessageTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
