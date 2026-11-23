import { OpenAPIHono } from '@hono/zod-openapi'
import { getPredictionsRoute, optionsPredictionsRoute, postPredictionsRoute } from '../routes'

const app = new OpenAPIHono()

export const predictionsHandler = app
  .openapi(getPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
