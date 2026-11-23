import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729GetRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
