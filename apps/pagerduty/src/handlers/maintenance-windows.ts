import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMaintenanceWindowsIdRoute,
  getMaintenanceWindowsIdRoute,
  getMaintenanceWindowsRoute,
  postMaintenanceWindowsRoute,
  putMaintenanceWindowsIdRoute,
} from '../routes'

export const getMaintenanceWindowsRouteHandler: RouteHandler<
  typeof getMaintenanceWindowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMaintenanceWindowsRouteHandler: RouteHandler<
  typeof postMaintenanceWindowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMaintenanceWindowsIdRouteHandler: RouteHandler<
  typeof getMaintenanceWindowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMaintenanceWindowsIdRouteHandler: RouteHandler<
  typeof deleteMaintenanceWindowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMaintenanceWindowsIdRouteHandler: RouteHandler<
  typeof putMaintenanceWindowsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
