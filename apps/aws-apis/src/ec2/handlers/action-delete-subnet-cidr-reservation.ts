import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSubnetCidrReservationRoute,
  postActionDeleteSubnetCidrReservationRoute,
} from '../routes'

export const getActionDeleteSubnetCidrReservationRouteHandler: RouteHandler<
  typeof getActionDeleteSubnetCidrReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSubnetCidrReservationRouteHandler: RouteHandler<
  typeof postActionDeleteSubnetCidrReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
