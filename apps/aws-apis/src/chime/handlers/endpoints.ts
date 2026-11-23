import type { RouteHandler } from '@hono/zod-openapi'
import type { getEndpointsMessagingSessionRoute } from '../routes'

export const getEndpointsMessagingSessionRouteHandler: RouteHandler<
  typeof getEndpointsMessagingSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
