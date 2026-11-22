import { OpenAPIHono } from '@hono/zod-openapi'
import { getPredictionsRoute, patchPredictionsRoute, postPredictionsRoute } from '../routes'

const app = new OpenAPIHono()

export const predictionsHandler = app
  .openapi(getPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
