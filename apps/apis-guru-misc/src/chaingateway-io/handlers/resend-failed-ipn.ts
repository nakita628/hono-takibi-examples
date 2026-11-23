import type { RouteHandler } from '@hono/zod-openapi'
import type { postResendFailedIPNRoute } from '../routes'

export const postResendFailedIPNRouteHandler: RouteHandler<
  typeof postResendFailedIPNRoute
> = async (c) => {
  throw new Error('Not implemented')
}
