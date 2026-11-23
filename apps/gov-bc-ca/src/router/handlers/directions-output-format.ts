import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectionsOutputFormatRoute, postDirectionsOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const directionsOutputFormatHandler = app
  .openapi(getDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectionsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
