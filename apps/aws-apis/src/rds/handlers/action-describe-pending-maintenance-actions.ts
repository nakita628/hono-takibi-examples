import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribePendingMaintenanceActionsRoute,
  postActionDescribePendingMaintenanceActionsRoute,
} from '../routes'

export const getActionDescribePendingMaintenanceActionsRouteHandler: RouteHandler<
  typeof getActionDescribePendingMaintenanceActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePendingMaintenanceActionsRouteHandler: RouteHandler<
  typeof postActionDescribePendingMaintenanceActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
