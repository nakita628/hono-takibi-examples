import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1VehiclesRoute } from '../routes'

const app = new OpenAPIHono()

export const vehicleHandler = app.openapi(postV1VehiclesRoute, (c) => {
  throw new Error('Not implemented')
})
