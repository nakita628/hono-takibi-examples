import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeactivateAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const DeactivateAnomalyDetectorHandler = app.openapi(
  postDeactivateAnomalyDetectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
