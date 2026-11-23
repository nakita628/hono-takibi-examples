import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionDeleteMessageRoute } from '../routes'

export const postActionDeleteMessageRouteHandler: RouteHandler<
  typeof postActionDeleteMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
