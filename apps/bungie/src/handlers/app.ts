import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppApiUsageApplicationIdIndexRoute, getAppFirstPartyIndexRoute } from '../routes'

export const getAppApiUsageApplicationIdIndexRouteHandler: RouteHandler<
  typeof getAppApiUsageApplicationIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppFirstPartyIndexRouteHandler: RouteHandler<
  typeof getAppFirstPartyIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
