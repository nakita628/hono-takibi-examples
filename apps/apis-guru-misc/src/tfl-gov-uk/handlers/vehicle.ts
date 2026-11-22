import { OpenAPIHono } from '@hono/zod-openapi'
import { getVehicleIdsArrivalsRoute } from '../routes'

const app = new OpenAPIHono()

export const vehicleHandler = app.openapi(getVehicleIdsArrivalsRoute, (c) => {
  throw new Error('Not implemented')
})
