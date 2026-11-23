import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateSubnetCidrReservationRoute,
  postActionCreateSubnetCidrReservationRoute,
} from '../routes'

export const getActionCreateSubnetCidrReservationRouteHandler: RouteHandler<
  typeof getActionCreateSubnetCidrReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSubnetCidrReservationRouteHandler: RouteHandler<
  typeof postActionCreateSubnetCidrReservationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
