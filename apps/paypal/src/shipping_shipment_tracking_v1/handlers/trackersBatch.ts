import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ShippingTrackersBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const trackersBatchHandler = app.openapi(postV1ShippingTrackersBatchRoute, (c) => {
  throw new Error('Not implemented')
})
