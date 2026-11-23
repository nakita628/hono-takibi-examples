import { OpenAPIHono } from '@hono/zod-openapi'
import { postPredictRoute } from '../routes'

const app = new OpenAPIHono()

export const predictHandler = app.openapi(postPredictRoute, (c) => {
  throw new Error('Not implemented')
})
