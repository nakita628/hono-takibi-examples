import type { RouteHandler } from '@hono/zod-openapi'
import type { getActivitySessionRoute, getActivityWebhooksRoute } from '../routes'

export const getActivitySessionRouteHandler: RouteHandler<typeof getActivitySessionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getActivityWebhooksRouteHandler: RouteHandler<
  typeof getActivityWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
