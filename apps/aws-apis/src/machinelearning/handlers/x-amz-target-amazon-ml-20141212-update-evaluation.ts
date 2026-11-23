import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212UpdateEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212UpdateEvaluationHandler = app.openapi(
  postXAmzTargetAmazonML20141212UpdateEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
