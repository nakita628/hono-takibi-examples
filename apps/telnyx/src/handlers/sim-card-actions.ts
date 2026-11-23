import type { RouteHandler } from '@hono/zod-openapi'
import type { getSimCardActionsIdRoute, getSimCardActionsRoute } from '../routes'

export const getSimCardActionsRouteHandler: RouteHandler<typeof getSimCardActionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSimCardActionsIdRouteHandler: RouteHandler<
  typeof getSimCardActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
