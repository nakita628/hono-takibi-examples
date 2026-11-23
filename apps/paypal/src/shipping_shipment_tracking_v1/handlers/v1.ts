import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ShippingTrackersIdRoute,
  getV1ShippingTrackersRoute,
  postV1ShippingTrackersBatchRoute,
  postV1ShippingTrackersRoute,
  putV1ShippingTrackersIdRoute,
} from '../routes'

export const postV1ShippingTrackersBatchRouteHandler: RouteHandler<
  typeof postV1ShippingTrackersBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShippingTrackersRouteHandler: RouteHandler<
  typeof postV1ShippingTrackersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShippingTrackersRouteHandler: RouteHandler<
  typeof getV1ShippingTrackersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ShippingTrackersIdRouteHandler: RouteHandler<
  typeof putV1ShippingTrackersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShippingTrackersIdRouteHandler: RouteHandler<
  typeof getV1ShippingTrackersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
