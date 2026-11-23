import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevicePinnersDevicePinnerIdRoute,
  getDevicePinnersDevicePinnerIdRoute,
} from '../routes'

export const getDevicePinnersDevicePinnerIdRouteHandler: RouteHandler<
  typeof getDevicePinnersDevicePinnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicePinnersDevicePinnerIdRouteHandler: RouteHandler<
  typeof deleteDevicePinnersDevicePinnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
