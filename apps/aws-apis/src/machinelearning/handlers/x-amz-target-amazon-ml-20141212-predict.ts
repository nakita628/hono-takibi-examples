import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212PredictRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212PredictHandler = app.openapi(
  postXAmzTargetAmazonML20141212PredictRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
