import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventConfigurationsResourceTypeRoute } from '../routes'

export const getEventConfigurationsResourceTypeRouteHandler: RouteHandler<
  typeof getEventConfigurationsResourceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
