import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHardwareReservationsIdRoute,
  postHardwareReservationsIdActivateRoute,
  postHardwareReservationsIdMoveRoute,
} from '../routes'

export const getHardwareReservationsIdRouteHandler: RouteHandler<
  typeof getHardwareReservationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postHardwareReservationsIdActivateRouteHandler: RouteHandler<
  typeof postHardwareReservationsIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postHardwareReservationsIdMoveRouteHandler: RouteHandler<
  typeof postHardwareReservationsIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
