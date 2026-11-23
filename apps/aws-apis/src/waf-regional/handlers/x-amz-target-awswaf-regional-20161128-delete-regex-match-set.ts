import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteRegexMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteRegexMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
