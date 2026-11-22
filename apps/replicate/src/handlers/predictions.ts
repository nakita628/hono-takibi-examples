import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPredictionsPredictionIdRoute,
  getPredictionsRoute,
  postPredictionsPredictionIdCancelRoute,
  postPredictionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const predictionsHandler = app
  .openapi(getPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPredictionsPredictionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictionsPredictionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
