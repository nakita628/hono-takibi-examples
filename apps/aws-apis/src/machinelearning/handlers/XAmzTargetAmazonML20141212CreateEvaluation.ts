import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212CreateEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212CreateEvaluationHandler = app.openapi(
  postXAmzTargetAmazonML20141212CreateEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
