import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ShipmentsShipmentIdTagsTagNameRoute,
  getV1ShipmentsExternalShipmentIdExternalShipmentIdRoute,
  getV1ShipmentsRoute,
  getV1ShipmentsShipmentIdRatesRoute,
  getV1ShipmentsShipmentIdRoute,
  postV1ShipmentsRoute,
  postV1ShipmentsShipmentIdTagsTagNameRoute,
  putV1ShipmentsRecognizeRoute,
  putV1ShipmentsShipmentIdCancelRoute,
  putV1ShipmentsShipmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shipmentsHandler = app
  .openapi(getV1ShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsExternalShipmentIdExternalShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShipmentsRecognizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShipmentsShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShipmentsShipmentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsShipmentIdRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ShipmentsShipmentIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentsShipmentIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
