import type { RouteHandler } from '@hono/zod-openapi'
import type { postVerifyPasswordChangeRoute } from '../routes'

export const postVerifyPasswordChangeRouteHandler: RouteHandler<
  typeof postVerifyPasswordChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
