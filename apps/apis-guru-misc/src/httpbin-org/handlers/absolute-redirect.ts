import type { RouteHandler } from '@hono/zod-openapi'
import type { getAbsoluteRedirectNRoute } from '../routes'

export const getAbsoluteRedirectNRouteHandler: RouteHandler<
  typeof getAbsoluteRedirectNRoute
> = async (c) => {
  throw new Error('Not implemented')
}
