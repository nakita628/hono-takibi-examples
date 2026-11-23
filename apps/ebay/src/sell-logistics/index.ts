import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShipmentShipmentIdDownloadLabelFileRoute,
  getShipmentShipmentIdRoute,
  getShippingQuoteShippingQuoteIdRoute,
  postShipmentCreateFromShippingQuoteRoute,
  postShipmentShipmentIdCancelRoute,
  postShippingQuoteRoute,
} from './routes'
import {
  getShipmentShipmentIdDownloadLabelFileRouteHandler,
  getShipmentShipmentIdRouteHandler,
  getShippingQuoteShippingQuoteIdRouteHandler,
  postShipmentCreateFromShippingQuoteRouteHandler,
  postShipmentShipmentIdCancelRouteHandler,
  postShippingQuoteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postShipmentCreateFromShippingQuoteRoute,
    postShipmentCreateFromShippingQuoteRouteHandler,
  )
  .openapi(getShipmentShipmentIdRoute, getShipmentShipmentIdRouteHandler)
  .openapi(postShipmentShipmentIdCancelRoute, postShipmentShipmentIdCancelRouteHandler)
  .openapi(
    getShipmentShipmentIdDownloadLabelFileRoute,
    getShipmentShipmentIdDownloadLabelFileRouteHandler,
  )
  .openapi(postShippingQuoteRoute, postShippingQuoteRouteHandler)
  .openapi(getShippingQuoteShippingQuoteIdRoute, getShippingQuoteShippingQuoteIdRouteHandler)

export default app
