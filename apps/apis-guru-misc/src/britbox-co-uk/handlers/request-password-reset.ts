import type { RouteHandler } from '@hono/zod-openapi'
import type { postRequestPasswordResetRoute } from '../routes'

export const postRequestPasswordResetRouteHandler: RouteHandler<
  typeof postRequestPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
