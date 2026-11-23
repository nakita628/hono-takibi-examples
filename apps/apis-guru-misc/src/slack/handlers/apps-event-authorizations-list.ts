import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsEventAuthorizationsListRoute } from '../routes'

export const getAppsEventAuthorizationsListRouteHandler: RouteHandler<
  typeof getAppsEventAuthorizationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
