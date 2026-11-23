import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChargersChargerIdRoute,
  getChargersRoute,
  postChargersChargerIdChargingRoute,
} from '../routes'

export const getChargersRouteHandler: RouteHandler<typeof getChargersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChargersChargerIdRouteHandler: RouteHandler<
  typeof getChargersChargerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChargersChargerIdChargingRouteHandler: RouteHandler<
  typeof postChargersChargerIdChargingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
