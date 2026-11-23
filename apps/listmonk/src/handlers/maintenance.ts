import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMaintenanceAnalyticsTypeRoute,
  deleteMaintenanceSubscribersTypeRoute,
  deleteMaintenanceSubscriptionsUnconfirmedRoute,
} from '../routes'

export const deleteMaintenanceSubscribersTypeRouteHandler: RouteHandler<
  typeof deleteMaintenanceSubscribersTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMaintenanceAnalyticsTypeRouteHandler: RouteHandler<
  typeof deleteMaintenanceAnalyticsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMaintenanceSubscriptionsUnconfirmedRouteHandler: RouteHandler<
  typeof deleteMaintenanceSubscriptionsUnconfirmedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
