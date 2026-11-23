import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionPurchaseScheduledInstancesRoute,
  postActionPurchaseScheduledInstancesRoute,
} from '../routes'

export const getActionPurchaseScheduledInstancesRouteHandler: RouteHandler<
  typeof getActionPurchaseScheduledInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPurchaseScheduledInstancesRouteHandler: RouteHandler<
  typeof postActionPurchaseScheduledInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
