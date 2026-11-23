import { OpenAPIHono } from '@hono/zod-openapi'
import { getPredictRoute, postPredictRoute } from '../routes'

const app = new OpenAPIHono()

export const predictHandler = app
  .openapi(getPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPredictRoute, (c) => {
    throw new Error('Not implemented')
  })
