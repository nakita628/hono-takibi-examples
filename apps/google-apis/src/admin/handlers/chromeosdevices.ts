import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRoute,
  patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRoute,
  putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chromeosdevicesHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
