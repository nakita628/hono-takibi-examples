import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
