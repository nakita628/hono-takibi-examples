import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212GetEvaluationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212GetEvaluationHandler = app.openapi(
  postXAmzTargetAmazonML20141212GetEvaluationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
