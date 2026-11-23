import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteQueuedReservedInstancesRoute,
  postActionDeleteQueuedReservedInstancesRoute,
} from '../routes'

export const getActionDeleteQueuedReservedInstancesRouteHandler: RouteHandler<
  typeof getActionDeleteQueuedReservedInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteQueuedReservedInstancesRouteHandler: RouteHandler<
  typeof postActionDeleteQueuedReservedInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
