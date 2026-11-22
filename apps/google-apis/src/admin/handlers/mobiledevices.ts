import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesMobileRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobiledevicesHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
