import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyInstanceMaintenanceOptionsRoute,
  postActionModifyInstanceMaintenanceOptionsRoute,
} from '../routes'

export const getActionModifyInstanceMaintenanceOptionsRouteHandler: RouteHandler<
  typeof getActionModifyInstanceMaintenanceOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyInstanceMaintenanceOptionsRouteHandler: RouteHandler<
  typeof postActionModifyInstanceMaintenanceOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
