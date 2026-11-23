import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountIdBuildsStatusRoute } from '../routes'

export const getAccountIdBuildsStatusRouteHandler: RouteHandler<
  typeof getAccountIdBuildsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
