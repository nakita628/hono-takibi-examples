import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShipmentShipmentIdDownloadLabelFileRoute,
  getShipmentShipmentIdRoute,
  postShipmentCreateFromShippingQuoteRoute,
  postShipmentShipmentIdCancelRoute,
} from '../routes'

export const postShipmentCreateFromShippingQuoteRouteHandler: RouteHandler<
  typeof postShipmentCreateFromShippingQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentShipmentIdRouteHandler: RouteHandler<
  typeof getShipmentShipmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShipmentShipmentIdCancelRouteHandler: RouteHandler<
  typeof postShipmentShipmentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShipmentShipmentIdDownloadLabelFileRouteHandler: RouteHandler<
  typeof getShipmentShipmentIdDownloadLabelFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
