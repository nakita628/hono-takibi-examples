import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyCurrentDBClusterCapacityRoute,
  postActionModifyCurrentDBClusterCapacityRoute,
} from '../routes'

export const getActionModifyCurrentDBClusterCapacityRouteHandler: RouteHandler<
  typeof getActionModifyCurrentDBClusterCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCurrentDBClusterCapacityRouteHandler: RouteHandler<
  typeof postActionModifyCurrentDBClusterCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
