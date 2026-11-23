import type { RouteHandler } from '@hono/zod-openapi'
import type { getPerformancereportRoute } from '../routes'

export const getPerformancereportRouteHandler: RouteHandler<
  typeof getPerformancereportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
