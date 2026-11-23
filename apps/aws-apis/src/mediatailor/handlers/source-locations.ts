import { OpenAPIHono } from '@hono/zod-openapi'
import { getSourceLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const sourceLocationsHandler = app.openapi(getSourceLocationsRoute, (c) => {
  throw new Error('Not implemented')
})
