import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shipmentHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
