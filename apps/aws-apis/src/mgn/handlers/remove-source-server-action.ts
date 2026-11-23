import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemoveSourceServerActionRoute } from '../routes'

export const postRemoveSourceServerActionRouteHandler: RouteHandler<
  typeof postRemoveSourceServerActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
