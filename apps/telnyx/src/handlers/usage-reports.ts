import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsageReportsOptionsRoute, getUsageReportsRoute } from '../routes'

export const getUsageReportsRouteHandler: RouteHandler<typeof getUsageReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsageReportsOptionsRouteHandler: RouteHandler<
  typeof getUsageReportsOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
