import { OpenAPIHono } from '@hono/zod-openapi'
import { getFleetFleetnameRoute } from '../routes'

const app = new OpenAPIHono()

export const fleetHandler = app.openapi(getFleetFleetnameRoute, (c) => {
  throw new Error('Not implemented')
})
