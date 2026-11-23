import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvailabilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const availabilitiesHandler = app.openapi(getAvailabilitiesRoute, (c) => {
  throw new Error('Not implemented')
})
