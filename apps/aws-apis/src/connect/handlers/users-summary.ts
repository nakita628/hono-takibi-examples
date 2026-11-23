import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsersSummaryInstanceIdRoute } from '../routes'

export const getUsersSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getUsersSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
