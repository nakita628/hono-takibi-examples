import { OpenAPIHono } from '@hono/zod-openapi'
import { postMlDeliveryPredictionRoute } from '../routes'

const app = new OpenAPIHono()

export const machineLearningHandler = app.openapi(postMlDeliveryPredictionRoute, (c) => {
  throw new Error('Not implemented')
})
