import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeactivateAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const deactivateAnomalyDetectorHandler = app.openapi(
  postDeactivateAnomalyDetectorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
