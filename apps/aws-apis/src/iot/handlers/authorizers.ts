import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthorizersIndexRoute } from '../routes'

export const getAuthorizersIndexRouteHandler: RouteHandler<
  typeof getAuthorizersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
