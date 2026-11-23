import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMulticastGroupsIdRoute,
  deleteMulticastGroupsIdSessionRoute,
  deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRoute,
  getMulticastGroupsIdRoute,
  getMulticastGroupsIdSessionRoute,
  getMulticastGroupsRoute,
  patchMulticastGroupsIdBulkRoute,
  patchMulticastGroupsIdRoute,
  postMulticastGroupsIdBulkRoute,
  postMulticastGroupsIdDataRoute,
  postMulticastGroupsRoute,
  putMulticastGroupsIdSessionRoute,
  putMulticastGroupsIdWirelessDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multicastGroupsHandler = app
  .openapi(putMulticastGroupsIdWirelessDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMulticastGroupsIdSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMulticastGroupsIdSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMulticastGroupsIdSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMulticastGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMulticastGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMulticastGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMulticastGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMulticastGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMulticastGroupsIdWirelessDevicesWirelessDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMulticastGroupsIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMulticastGroupsIdBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMulticastGroupsIdBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
