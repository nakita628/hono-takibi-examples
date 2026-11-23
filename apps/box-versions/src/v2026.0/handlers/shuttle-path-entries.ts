import type { RouteHandler } from '@hono/zod-openapi'
import type { getShuttlePathEntriesRoute } from '../routes'

export const getShuttlePathEntriesRouteHandler: RouteHandler<
  typeof getShuttlePathEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
