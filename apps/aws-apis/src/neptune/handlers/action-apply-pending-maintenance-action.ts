import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionApplyPendingMaintenanceActionRoute,
  postActionApplyPendingMaintenanceActionRoute,
} from '../routes'

export const getActionApplyPendingMaintenanceActionRouteHandler: RouteHandler<
  typeof getActionApplyPendingMaintenanceActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionApplyPendingMaintenanceActionRouteHandler: RouteHandler<
  typeof postActionApplyPendingMaintenanceActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
