import type { RouteHandler } from '@hono/zod-openapi'
import type { getSessionsDataSeriesRoute } from '../routes'

export const getSessionsDataSeriesRouteHandler: RouteHandler<
  typeof getSessionsDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
