import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMaintenanceMaintenanceRunIDRoute,
  getMaintenanceRoute,
  patchMaintenanceMaintenanceRunIDRoute,
  postMaintenanceMaintenanceRunIDTriggerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceHandler = app
  .openapi(getMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMaintenanceMaintenanceRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMaintenanceMaintenanceRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMaintenanceMaintenanceRunIDTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
