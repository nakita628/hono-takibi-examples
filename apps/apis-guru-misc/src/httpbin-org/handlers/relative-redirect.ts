import type { RouteHandler } from '@hono/zod-openapi'
import type { getRelativeRedirectNRoute } from '../routes'

export const getRelativeRedirectNRouteHandler: RouteHandler<
  typeof getRelativeRedirectNRoute
> = async (c) => {
  throw new Error('Not implemented')
}
