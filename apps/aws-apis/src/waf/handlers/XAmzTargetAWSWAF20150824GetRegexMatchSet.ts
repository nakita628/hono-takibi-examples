import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
