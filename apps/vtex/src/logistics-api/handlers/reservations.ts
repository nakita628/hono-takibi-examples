import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLogisticsPvtInventoryReservationsReservationIdRoute,
  getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdRoute,
  postApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeRoute,
  postApiLogisticsPvtInventoryReservationsReservationIdCancelRoute,
  postApiLogisticsPvtInventoryReservationsReservationIdConfirmRoute,
  postApiLogisticsPvtInventoryReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reservationsHandler = app
  .openapi(postApiLogisticsPvtInventoryReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryReservationsReservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtInventoryReservationsReservationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtInventoryReservationsReservationIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
