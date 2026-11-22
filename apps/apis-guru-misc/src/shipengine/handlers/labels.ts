import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LabelsExternalShipmentIdExternalShipmentIdRoute,
  getV1LabelsLabelIdRoute,
  getV1LabelsLabelIdTrackRoute,
  getV1LabelsRoute,
  postV1LabelsLabelIdReturnRoute,
  postV1LabelsRatesRateIdRoute,
  postV1LabelsRoute,
  postV1LabelsShipmentShipmentIdRoute,
  putV1LabelsLabelIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getV1LabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsExternalShipmentIdExternalShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsShipmentShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsLabelIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsLabelIdTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LabelsLabelIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
