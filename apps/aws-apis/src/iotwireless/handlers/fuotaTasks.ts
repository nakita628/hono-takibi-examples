import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRoute,
  deleteFuotaTasksIdRoute,
  deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRoute,
  getFuotaTasksIdMulticastGroupsRoute,
  getFuotaTasksIdRoute,
  getFuotaTasksRoute,
  patchFuotaTasksIdRoute,
  postFuotaTasksRoute,
  putFuotaTasksIdMulticastGroupRoute,
  putFuotaTasksIdRoute,
  putFuotaTasksIdWirelessDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fuotaTasksHandler = app
  .openapi(putFuotaTasksIdMulticastGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFuotaTasksIdWirelessDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFuotaTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuotaTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFuotaTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuotaTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFuotaTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFuotaTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFuotaTasksIdMulticastGroupsMulticastGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFuotaTasksIdWirelessDevicesWirelessDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFuotaTasksIdMulticastGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
