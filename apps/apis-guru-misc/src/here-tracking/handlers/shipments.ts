import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShipmentsV4PlansRoute,
  deleteShipmentsV4PlansShipmentPlanIdRoute,
  deleteShipmentsV4Route,
  deleteShipmentsV4ShipmentIdRoute,
  getShipmentsV4HealthRoute,
  getShipmentsV4PlansRoute,
  getShipmentsV4PlansShipmentPlanIdRoute,
  getShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute,
  getShipmentsV4Route,
  getShipmentsV4ShipmentIdRoute,
  getShipmentsV4ShipmentIdSegmentIdRoute,
  getShipmentsV4TrackingIdSegmentsRoute,
  getShipmentsV4VersionRoute,
  patchShipmentsV4PlansShipmentPlanIdRoute,
  patchShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute,
  patchShipmentsV4ShipmentIdRoute,
  patchShipmentsV4ShipmentIdSegmentIdRoute,
  postShipmentsV4PlansRoute,
  postShipmentsV4Route,
} from '../routes'

const app = new OpenAPIHono()

export const shipmentsHandler = app
  .openapi(deleteShipmentsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShipmentsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShipmentsV4PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShipmentsV4PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShipmentsV4PlansShipmentPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4PlansShipmentPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchShipmentsV4PlansShipmentPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchShipmentsV4PlansShipmentPlanIdSegmentPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShipmentsV4ShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4ShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchShipmentsV4ShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4ShipmentIdSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchShipmentsV4ShipmentIdSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShipmentsV4TrackingIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
