import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
