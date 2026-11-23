import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
