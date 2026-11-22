import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateAnomalyDetectorHandler = app.openapi(postUpdateAnomalyDetectorRoute, (c) => {
  throw new Error('Not implemented')
})
