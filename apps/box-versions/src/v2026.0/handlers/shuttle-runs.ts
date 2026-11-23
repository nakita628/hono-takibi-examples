import type { RouteHandler } from '@hono/zod-openapi'
import type { getShuttleRunsRoute, getShuttleRunsShuttleRunIdRoute } from '../routes'

export const getShuttleRunsRouteHandler: RouteHandler<typeof getShuttleRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShuttleRunsShuttleRunIdRouteHandler: RouteHandler<
  typeof getShuttleRunsShuttleRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
