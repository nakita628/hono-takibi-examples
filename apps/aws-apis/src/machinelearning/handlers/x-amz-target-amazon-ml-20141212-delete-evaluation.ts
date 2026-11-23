import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DeleteEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212DeleteEvaluationHandler = app.openapi(
  postXAmzTargetAmazonML20141212DeleteEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
