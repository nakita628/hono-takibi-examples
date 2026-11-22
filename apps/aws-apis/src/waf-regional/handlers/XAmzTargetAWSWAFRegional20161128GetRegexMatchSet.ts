import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
