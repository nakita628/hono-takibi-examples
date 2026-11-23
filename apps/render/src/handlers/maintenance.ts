import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMaintenanceMaintenanceRunIDRoute,
  getMaintenanceRoute,
  patchMaintenanceMaintenanceRunIDRoute,
  postMaintenanceMaintenanceRunIDTriggerRoute,
} from '../routes'

export const getMaintenanceRouteHandler: RouteHandler<typeof getMaintenanceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMaintenanceMaintenanceRunIDRouteHandler: RouteHandler<
  typeof getMaintenanceMaintenanceRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMaintenanceMaintenanceRunIDRouteHandler: RouteHandler<
  typeof patchMaintenanceMaintenanceRunIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMaintenanceMaintenanceRunIDTriggerRouteHandler: RouteHandler<
  typeof postMaintenanceMaintenanceRunIDTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
