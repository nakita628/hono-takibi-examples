import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMaintenanceIdRoute,
  getMaintenanceRoute,
  postMaintenanceRoute,
  putMaintenanceIdRoute,
} from '../routes'

export const getMaintenanceRouteHandler: RouteHandler<typeof getMaintenanceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMaintenanceRouteHandler: RouteHandler<typeof postMaintenanceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMaintenanceIdRouteHandler: RouteHandler<
  typeof deleteMaintenanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMaintenanceIdRouteHandler: RouteHandler<typeof putMaintenanceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
