import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVehiclesRoute,
  getVehiclesVehicleIdChargeStateRoute,
  getVehiclesVehicleIdInformationRoute,
  getVehiclesVehicleIdLocationRoute,
  getVehiclesVehicleIdOdometerRoute,
  getVehiclesVehicleIdRoute,
  getVehiclesVehicleIdSmartChargingPolicyRoute,
  postVehiclesVehicleIdChargingRoute,
  postVehiclesVehicleIdWatchRoute,
  putVehiclesVehicleIdSmartChargingPolicyRoute,
} from '../routes'

export const getVehiclesRouteHandler: RouteHandler<typeof getVehiclesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVehiclesVehicleIdRouteHandler: RouteHandler<
  typeof getVehiclesVehicleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVehiclesVehicleIdChargeStateRouteHandler: RouteHandler<
  typeof getVehiclesVehicleIdChargeStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVehiclesVehicleIdChargingRouteHandler: RouteHandler<
  typeof postVehiclesVehicleIdChargingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVehiclesVehicleIdInformationRouteHandler: RouteHandler<
  typeof getVehiclesVehicleIdInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVehiclesVehicleIdLocationRouteHandler: RouteHandler<
  typeof getVehiclesVehicleIdLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVehiclesVehicleIdOdometerRouteHandler: RouteHandler<
  typeof getVehiclesVehicleIdOdometerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVehiclesVehicleIdSmartChargingPolicyRouteHandler: RouteHandler<
  typeof getVehiclesVehicleIdSmartChargingPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVehiclesVehicleIdSmartChargingPolicyRouteHandler: RouteHandler<
  typeof putVehiclesVehicleIdSmartChargingPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVehiclesVehicleIdWatchRouteHandler: RouteHandler<
  typeof postVehiclesVehicleIdWatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
