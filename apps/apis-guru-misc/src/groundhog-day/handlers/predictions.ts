import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1PredictionsRoute } from '../routes'

const app = new OpenAPIHono()

export const predictionsHandler = app.openapi(getApiV1PredictionsRoute, (c) => {
  throw new Error('Not implemented')
})
