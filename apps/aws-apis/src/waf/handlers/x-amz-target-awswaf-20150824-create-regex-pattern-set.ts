import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
