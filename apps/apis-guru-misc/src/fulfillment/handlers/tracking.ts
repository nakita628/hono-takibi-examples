import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrackRoute } from '../routes'

const app = new OpenAPIHono()

export const trackingHandler = app.openapi(getTrackRoute, (c) => {
  throw new Error('Not implemented')
})
