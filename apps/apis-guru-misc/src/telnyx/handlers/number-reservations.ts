import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNumberReservationsNumberReservationIdRoute,
  getNumberReservationsRoute,
  postNumberReservationsNumberReservationIdActionsExtendRoute,
  postNumberReservationsRoute,
} from '../routes'

export const getNumberReservationsRouteHandler: RouteHandler<
  typeof getNumberReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberReservationsRouteHandler: RouteHandler<
  typeof postNumberReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNumberReservationsNumberReservationIdRouteHandler: RouteHandler<
  typeof getNumberReservationsNumberReservationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNumberReservationsNumberReservationIdActionsExtendRouteHandler: RouteHandler<
  typeof postNumberReservationsNumberReservationIdActionsExtendRoute
> = async (c) => {
  throw new Error('Not implemented')
}
