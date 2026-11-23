import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
