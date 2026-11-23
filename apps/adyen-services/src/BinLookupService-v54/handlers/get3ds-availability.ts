import { OpenAPIHono } from '@hono/zod-openapi'
import { postGet3dsAvailabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const get3dsAvailabilityHandler = app.openapi(postGet3dsAvailabilityRoute, (c) => {
  throw new Error('Not implemented')
})
