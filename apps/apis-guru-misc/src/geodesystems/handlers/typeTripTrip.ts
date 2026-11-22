import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTripTripRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTripTripHandler = app.openapi(getRepositorySearchTypeTripTripRoute, (c) => {
  throw new Error('Not implemented')
})
