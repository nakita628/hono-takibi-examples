import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteShippingZonesIdRoute,
  getShippingZonesIdRoute,
  getShippingZonesRoute,
  postShippingZonesRoute,
  putShippingZonesIdRoute,
} from '../routes'

export const getShippingZonesRouteHandler: RouteHandler<typeof getShippingZonesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postShippingZonesRouteHandler: RouteHandler<typeof postShippingZonesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteShippingZonesIdRouteHandler: RouteHandler<
  typeof deleteShippingZonesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShippingZonesIdRouteHandler: RouteHandler<typeof getShippingZonesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putShippingZonesIdRouteHandler: RouteHandler<typeof putShippingZonesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
