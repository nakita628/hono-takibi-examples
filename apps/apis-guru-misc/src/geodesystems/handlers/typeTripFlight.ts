import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTripFlightRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTripFlightHandler = app.openapi(getRepositorySearchTypeTripFlightRoute, (c) => {
  throw new Error('Not implemented')
})
