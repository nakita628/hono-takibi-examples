import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const createAnomalyDetectorHandler = app.openapi(postCreateAnomalyDetectorRoute, (c) => {
  throw new Error('Not implemented')
})
