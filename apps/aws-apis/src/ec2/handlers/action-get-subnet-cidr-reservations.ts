import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetSubnetCidrReservationsRoute,
  postActionGetSubnetCidrReservationsRoute,
} from '../routes'

export const getActionGetSubnetCidrReservationsRouteHandler: RouteHandler<
  typeof getActionGetSubnetCidrReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSubnetCidrReservationsRouteHandler: RouteHandler<
  typeof postActionGetSubnetCidrReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
