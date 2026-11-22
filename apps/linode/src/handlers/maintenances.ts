import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionAccountMaintenanceRoute } from '../routes'

const app = new OpenAPIHono()

export const maintenancesHandler = app.openapi(getApiVersionAccountMaintenanceRoute, (c) => {
  throw new Error('Not implemented')
})
