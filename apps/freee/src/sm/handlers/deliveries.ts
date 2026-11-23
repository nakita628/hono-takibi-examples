import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeliveriesIdRoute,
  getDeliveriesRoute,
  patchDeliveriesIdRoute,
  postDeliveriesIdCancellationRoute,
  postDeliveriesRoute,
  putDeliveriesIdAcceptanceStatusRoute,
  putDeliveriesIdDeliveryStatusRoute,
} from '../routes'

export const getDeliveriesRouteHandler: RouteHandler<typeof getDeliveriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDeliveriesRouteHandler: RouteHandler<typeof postDeliveriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeliveriesIdRouteHandler: RouteHandler<typeof getDeliveriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDeliveriesIdRouteHandler: RouteHandler<typeof patchDeliveriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDeliveriesIdCancellationRouteHandler: RouteHandler<
  typeof postDeliveriesIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeliveriesIdDeliveryStatusRouteHandler: RouteHandler<
  typeof putDeliveriesIdDeliveryStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDeliveriesIdAcceptanceStatusRouteHandler: RouteHandler<
  typeof putDeliveriesIdAcceptanceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
