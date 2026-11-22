import { OpenAPIHono } from '@hono/zod-openapi'
import { postTravelTripParserRoute } from '../routes'

const app = new OpenAPIHono()

export const tripHandler = app.openapi(postTravelTripParserRoute, (c) => {
  throw new Error('Not implemented')
})
