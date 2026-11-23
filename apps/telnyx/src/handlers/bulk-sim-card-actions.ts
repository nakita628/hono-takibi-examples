import type { RouteHandler } from '@hono/zod-openapi'
import type { getBulkSimCardActionsIdRoute, getBulkSimCardActionsRoute } from '../routes'

export const getBulkSimCardActionsRouteHandler: RouteHandler<
  typeof getBulkSimCardActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBulkSimCardActionsIdRouteHandler: RouteHandler<
  typeof getBulkSimCardActionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
