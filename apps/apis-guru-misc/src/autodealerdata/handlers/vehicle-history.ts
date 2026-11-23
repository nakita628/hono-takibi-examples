import { OpenAPIHono } from '@hono/zod-openapi'
import { getVehicleHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const vehicleHistoryHandler = app.openapi(getVehicleHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
