import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShipmentShipmentIdDownloadLabelFileRoute,
  getShipmentShipmentIdRoute,
  postShipmentCreateFromShippingQuoteRoute,
  postShipmentShipmentIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shipmentHandler = app
  .openapi(postShipmentCreateFromShippingQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShipmentShipmentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentShipmentIdDownloadLabelFileRoute, (c) => {
    throw new Error('Not implemented')
  })
