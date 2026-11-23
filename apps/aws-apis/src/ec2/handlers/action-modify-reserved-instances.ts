import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyReservedInstancesRoute,
  postActionModifyReservedInstancesRoute,
} from '../routes'

export const getActionModifyReservedInstancesRouteHandler: RouteHandler<
  typeof getActionModifyReservedInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyReservedInstancesRouteHandler: RouteHandler<
  typeof postActionModifyReservedInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
