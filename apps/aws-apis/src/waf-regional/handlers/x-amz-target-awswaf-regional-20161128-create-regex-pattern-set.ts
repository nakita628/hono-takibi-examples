import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
