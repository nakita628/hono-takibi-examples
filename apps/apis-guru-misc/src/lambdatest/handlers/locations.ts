import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app.openapi(getLocationsRoute, (c) => {
  throw new Error('Not implemented')
})
