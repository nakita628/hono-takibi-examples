import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationsIdRoute, getLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
