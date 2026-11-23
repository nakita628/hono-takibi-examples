import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
