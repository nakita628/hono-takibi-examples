import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
