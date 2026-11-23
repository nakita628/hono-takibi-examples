import type { RouteHandler } from '@hono/zod-openapi'
import type { getSimCardGroupActionsIdRoute, getSimCardGroupActionsRoute } from '../routes'

export const getSimCardGroupActionsRouteHandler: RouteHandler<
  typeof getSimCardGroupActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimCardGroupActionsIdRouteHandler: RouteHandler<
  typeof getSimCardGroupActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
