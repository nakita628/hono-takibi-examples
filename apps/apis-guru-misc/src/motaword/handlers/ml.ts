import { OpenAPIHono } from '@hono/zod-openapi'
import { postMlDeliveryPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const mlHandler = app.openapi(postMlDeliveryPredictionRoute, (c) => {
  throw new Error('Not implemented')
})
