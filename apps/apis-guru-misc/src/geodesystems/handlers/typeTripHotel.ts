import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTripHotelRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTripHotelHandler = app.openapi(getRepositorySearchTypeTripHotelRoute, (c) => {
  throw new Error('Not implemented')
})
