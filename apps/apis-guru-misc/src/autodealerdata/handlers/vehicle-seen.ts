import { OpenAPIHono } from '@hono/zod-openapi'
import { getVehicleSeenRoute } from '../routes'

const app = new OpenAPIHono()

export const vehicleSeenHandler = app.openapi(getVehicleSeenRoute, (c) => {
  throw new Error('Not implemented')
})
