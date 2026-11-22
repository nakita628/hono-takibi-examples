import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiVenuesIdRoute, getApiVenuesRoute, postApiVenuesIdReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const venueApiHandler = app
  .openapi(getApiVenuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVenuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVenuesIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
