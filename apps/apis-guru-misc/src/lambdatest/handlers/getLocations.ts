import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const getLocationsHandler = app.openapi(getLocationsRoute, (c) => {
  throw new Error('Not implemented')
})
