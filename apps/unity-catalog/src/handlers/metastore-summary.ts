import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetastoreSummaryRoute } from '../routes'

export const getMetastoreSummaryRouteHandler: RouteHandler<
  typeof getMetastoreSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
