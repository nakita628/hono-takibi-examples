import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterMaintenanceRoute,
  postActionModifyClusterMaintenanceRoute,
} from '../routes'

export const getActionModifyClusterMaintenanceRouteHandler: RouteHandler<
  typeof getActionModifyClusterMaintenanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterMaintenanceRouteHandler: RouteHandler<
  typeof postActionModifyClusterMaintenanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
