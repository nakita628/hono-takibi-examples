import type { RouteHandler } from '@hono/zod-openapi'
import type { postPasswordResetIndexRoute } from '../routes'

export const postPasswordResetIndexRouteHandler: RouteHandler<
  typeof postPasswordResetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
