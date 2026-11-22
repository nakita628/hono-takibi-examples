import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShipmentReportsV4HealthRoute,
  getShipmentReportsV4ShipmentReportIdMetricRoute,
  getShipmentReportsV4ShipmentReportIdStatusRoute,
  getShipmentReportsV4ShipmentReportIdSummaryRoute,
  getShipmentReportsV4VersionRoute,
  postShipmentReportsV4Route,
} from '../routes'

const app = new OpenAPIHono()

export const shipmentReportsHandler = app
  .openapi(postShipmentReportsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentReportsV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentReportsV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentReportsV4ShipmentReportIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentReportsV4ShipmentReportIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentReportsV4ShipmentReportIdMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
