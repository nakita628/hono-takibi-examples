import { OpenAPIHono } from '@hono/zod-openapi'
import { postBackTestAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const BackTestAnomalyDetectorHandler = app.openapi(postBackTestAnomalyDetectorRoute, (c) => {
  throw new Error('Not implemented')
})
