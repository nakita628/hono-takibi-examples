import { OpenAPIHono } from '@hono/zod-openapi'
import { getTripsRoute } from '../routes'

const app = new OpenAPIHono()

export const tripsHandler = app.openapi(getTripsRoute, (c) => {
  throw new Error('Not implemented')
})
