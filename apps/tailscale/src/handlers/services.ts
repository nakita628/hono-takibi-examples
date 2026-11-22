import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailnetTailnetServicesServiceNameRoute,
  getTailnetTailnetServicesRoute,
  getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
  getTailnetTailnetServicesServiceNameDevicesRoute,
  getTailnetTailnetServicesServiceNameRoute,
  postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
  putTailnetTailnetServicesServiceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getTailnetTailnetServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesServiceNameDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute, (c) => {
    throw new Error('Not implemented')
  })
