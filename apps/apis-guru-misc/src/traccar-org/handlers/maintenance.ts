import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMaintenanceIdRoute,
  getMaintenanceRoute,
  postMaintenanceRoute,
  putMaintenanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceHandler = app
  .openapi(getMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMaintenanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMaintenanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
