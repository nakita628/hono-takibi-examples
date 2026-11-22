import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMaintenanceWindowsIdRoute,
  getMaintenanceWindowsIdRoute,
  getMaintenanceWindowsRoute,
  postMaintenanceWindowsRoute,
  putMaintenanceWindowsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceWindowsHandler = app
  .openapi(getMaintenanceWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMaintenanceWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMaintenanceWindowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMaintenanceWindowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMaintenanceWindowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
