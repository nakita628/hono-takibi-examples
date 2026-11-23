import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessDevicesIdDataMessageIdRoute,
  deleteWirelessDevicesIdRoute,
  deleteWirelessDevicesIdThingRoute,
  getWirelessDevicesIdDataRoute,
  getWirelessDevicesIdentifierIdentifierTypeRoute,
  getWirelessDevicesIdStatisticsRoute,
  getWirelessDevicesRoute,
  patchWirelessDevicesIdentifierDeregisterRoute,
  patchWirelessDevicesIdRoute,
  postWirelessDevicesIdDataRoute,
  postWirelessDevicesIdTestRoute,
  postWirelessDevicesRoute,
  putWirelessDevicesIdThingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessDevicesHandler = app
  .openapi(putWirelessDevicesIdThingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessDevicesIdThingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessDevicesIdDataMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWirelessDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWirelessDevicesIdentifierDeregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDevicesIdentifierIdentifierTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDevicesIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDevicesIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessDevicesIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessDevicesIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
