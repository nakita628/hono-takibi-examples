import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128UpdateRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
