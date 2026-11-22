import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdminMaintenanceRoute, postApiAdminMaintenanceRoute } from '../routes'

const app = new OpenAPIHono()

export const maintenanceHandler = app
  .openapi(postApiAdminMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
