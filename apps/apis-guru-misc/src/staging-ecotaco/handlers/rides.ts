import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRidesIdCancelFeesRoute,
  getRidesIdCancelRoute,
  getRidesIdEstimateRoute,
  getRidesIdRoute,
  postRidesIdReserveRoute,
} from '../routes'

export const getRidesIdRouteHandler: RouteHandler<typeof getRidesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRidesIdCancelRouteHandler: RouteHandler<typeof getRidesIdCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRidesIdCancelFeesRouteHandler: RouteHandler<
  typeof getRidesIdCancelFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRidesIdEstimateRouteHandler: RouteHandler<typeof getRidesIdEstimateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRidesIdReserveRouteHandler: RouteHandler<typeof postRidesIdReserveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
