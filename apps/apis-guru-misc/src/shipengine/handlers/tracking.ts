import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TrackingRoute, postV1TrackingStartRoute, postV1TrackingStopRoute } from '../routes'

const app = new OpenAPIHono()

export const trackingHandler = app
  .openapi(getV1TrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TrackingStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TrackingStopRoute, (c) => {
    throw new Error('Not implemented')
  })
