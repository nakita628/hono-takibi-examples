import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutAnomalyDetectorRoute, postActionPutAnomalyDetectorRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutAnomalyDetectorHandler = app
  .openapi(getActionPutAnomalyDetectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutAnomalyDetectorRoute, (c) => {
    throw new Error('Not implemented')
  })
