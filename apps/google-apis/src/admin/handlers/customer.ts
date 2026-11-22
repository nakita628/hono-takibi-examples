import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerHandler = app
  .openapi(
    getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
