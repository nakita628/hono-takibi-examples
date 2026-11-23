import type { RouteHandler } from '@hono/zod-openapi'
import type { getShuttleDiscoveredSubjectsRoute } from '../routes'

export const getShuttleDiscoveredSubjectsRouteHandler: RouteHandler<
  typeof getShuttleDiscoveredSubjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
