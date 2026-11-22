import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationsMetrosIdRoute, getLocationsMetrosRoute } from '../routes'

const app = new OpenAPIHono()

export const metrosHandler = app
  .openapi(getLocationsMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsMetrosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
