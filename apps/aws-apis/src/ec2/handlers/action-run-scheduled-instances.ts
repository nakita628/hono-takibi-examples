import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRunScheduledInstancesRoute,
  postActionRunScheduledInstancesRoute,
} from '../routes'

export const getActionRunScheduledInstancesRouteHandler: RouteHandler<
  typeof getActionRunScheduledInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRunScheduledInstancesRouteHandler: RouteHandler<
  typeof postActionRunScheduledInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
