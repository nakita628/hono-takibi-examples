import type { RouteHandler } from '@hono/zod-openapi'
import type { postPasswordChangeIndexRoute } from '../routes'

export const postPasswordChangeIndexRouteHandler: RouteHandler<
  typeof postPasswordChangeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
