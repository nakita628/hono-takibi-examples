import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
