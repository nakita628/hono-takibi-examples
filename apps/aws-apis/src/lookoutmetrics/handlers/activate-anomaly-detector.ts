import { OpenAPIHono } from '@hono/zod-openapi'
import { postActivateAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const activateAnomalyDetectorHandler = app.openapi(postActivateAnomalyDetectorRoute, (c) => {
  throw new Error('Not implemented')
})
